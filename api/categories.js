const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
const { authRequired } = require("./auth");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const categories = await prisma.categories.findMany();
    res.send(categories);
  })
);

router.get(
  "/:categoryId",
  asyncErrorHandler(async (req, res, next) => {
    const category = await prisma.categories.findUnique({
      where: {
        id: +req.params.categoryId,
      },
    });
    res.send(category);
  })
);

router.patch(
  "/:categoryId", authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updatedCategory = await prisma.categories.update({
      where: {
        id: +req.params.categoryId,
      },
      data: req.body,
    });
    res.send(updatedCategory);
  })
);

router.post(
  "/", authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const newCategory = await prisma.categories.create({
      data: req.body,
    });
    res.send(newCategory);
  })
);

router.delete(
  "/:categoryId", authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deletedCategory = await prisma.categories.delete({
      where: {
        id: +req.params.categoryId,
      },
    });
    res.send(deletedCategory);
  })
);

module.exports = router;
