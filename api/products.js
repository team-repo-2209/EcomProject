const router = require("express").Router();
const prisma = require("../prisma/prisma");
const { authRequired, asyncErrorHandler } = require("./utils");

router.get(
  "/",
  asyncErrorHandler(async (req, res, next) => {
    const allProducts = await prisma.products.findMany();
    res.send(allProducts);
  })
);

router.get(
  "/:productId",
  asyncErrorHandler(async (req, res, next) => {
    const product = await prisma.products.findUnique({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(product);
  })
);

router.patch(
  "/:productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updateProduct = await prisma.products.update({
      where: {
        id: +req.params.productId,
      },
      data: req.body,
    });
    res.send(updateProduct);
  })
);

router.post(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const newProduct = await prisma.products.create({
      data: req.body,
    });
    res.send(newProduct);
  })
);

router.delete(
  "/:productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deletedProduct = await prisma.products.delete({
      where: {
        id: +req.params.productId,
      },
    });
    res.send(deletedProduct);
  })
);

module.exports = router;
