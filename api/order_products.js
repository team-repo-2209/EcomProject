const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
const { authRequired } = require("./auth");

router.get(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const order_products = await prisma.Order_Products.findMany();
    res.send(order_products);
  })
);

router.get(
  "/:order_productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const order_product = await prisma.Order_Products.findUnique({
      where: {
        id: +req.params.order_productId,
      },
    });
    res.send(order_product);
  })
);

//TEST!!!!
router.post(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const newOrderProduct = await prisma.Order_Products.create({
      data: req.body,
    });
    res.send(newOrderProduct);
  })
);

//TEST!!!!
router.patch(
  "/:order_productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updatedOrderProduct = await prisma.Order_Products.update({
      where: {
        id: +req.params.order_productId,
      },
      data: req.body,
    });
    res.send(updatedOrderProduct);
  })
);

router.delete(
  "/:order_productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deletedOrderProduct = await prisma.Order_Products.delete({
      where: {
        id: +req.params.order_productId,
      },
    });
    res.send(deletedOrderProduct);
  })
);

module.exports = router;
