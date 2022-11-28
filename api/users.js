const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const users = await prisma.users.findMany();
    res.send(users);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const createUser = await prisma.users.create({
      data: req.body,
    });
    res.send(newUser);
  })
);

router.patch(
  "/:userId",
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

router.fetch(
  "/:userId",
  asyncErrorHandler(async (req, res, next) => {
    const user = await prisma.user.findUnique({
      where: {
        id: +req.params.orderId,
      },
    });
    res.send(user);
  })
);

router.delete(
  "/:userId",
  asyncErrorHandler(async (req, res, next) => {
    const deleteUser = await prisma.users.delete({
      where: {
        id: +req.params.userId,
      },
    });
    res.send(deleteUser);
  })
);

router.post("/login", asyncErrorHandler, async (req, res, next) => {
  const { username, password } = data;
  const user = await prisma.users.findUnique({
    where: {
      username,
    },
  });
  if (!user) {
    throw createError.NotFound("User is not registered");
  }
  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword)
    throw createError.Unauthorized("Username or password is not valid");
  delete user.password;
  const accessToken = await jwt.signAccessToken(user);
  return { ...user, accessToken };
});

module.exports = router;
