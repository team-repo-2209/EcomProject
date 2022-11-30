const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const { JWT_SECRET } = process.env;
const prisma = require("../prisma/prisma");
const SALT_ROUNDS = 10;
const { authRequired } = require("./auth");

router.get(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const users = await prisma.users.findMany();
    res.send(users);
  })
);

router.post(
  "/register",
  asyncErrorHandler(async (req, res, next) => {
    const { email, username, password, firstname, lastname, phoneNumber } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = await prisma.users.create({
      data: {
        email,
        username,
        password: hashedPassword,
        firstname,
        lastname,
        phoneNumber,
      },
    });

    // Create your cart after you create the user. User the newUser.id as the order's userId

    delete newUser.password;

    const token = jwt.sign(newUser, JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    console.log("token:", token);
    res.send(newUser);
  })
);

router.patch(
  "/:userId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updateUser = await prisma.users.update({
      where: {
        id: +req.params.userId,
      },
      data: req.body,
    });
    res.send(updateUser);
  })
);

router.get(
  "/me",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    res.send(req.user);
  })
);

router.get(
  "/:userId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const user = await prisma.users.findUnique({
      where: {
        id: +req.params.userId,
      },
    });
    res.send(user);
  })
);

router.delete(
  "/:userId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deleteUser = await prisma.users.delete({
      where: {
        id: +req.params.userId,
      },
    });
    res.send(deleteUser);
  })
);

router.post(
  "/login",
  asyncErrorHandler(async (req, res, next) => {
    const { username, password } = req.body;
    const user = await prisma.users.findUnique({
      where: {
        username,
      },
    });
    // Check if there isn't a user with that username,
    // if there isn't send a specific error message to next saying, that is not a user
    console.log(user);
    const checkPassword = bcrypt.compare(password, user.password);

    if (checkPassword) {
      delete user.password;
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      res.send({ user });
    } else
      next({
        name: "Invaild Login",
        message: "Username or Password is incorrect",
      });
  })
);

router.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
