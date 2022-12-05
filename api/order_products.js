const router = require("express").Router();
const { asyncErrorHandler, authRequired } = require("./utils");
const prisma = require("../prisma/prisma");

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
  "/:orderId/:productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const newOrderProduct = await prisma.Order_Products.create({
      data: {
        orderId: +req.params.orderId,
        productId: +req.params.productId,
      },
    });
    res.send(newOrderProduct);
  })
);

//TEST!!!!
router.patch(
  "/:orderId/:productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updatedOrderProduct = await prisma.Order_Products.update({
      where: {
        orderId: +req.params.orderId,
        productId: +req.params.productId,
      },
    });
    res.send(updatedOrderProduct);
  })
);

router.delete(
  "/:orderId/:productId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deletedOrderProduct = await prisma.Order_Products.delete({
      where: {
        orderId: +req.params.orderId,
        productId: +req.params.productId,
      },
    });
    res.send(deletedOrderProduct);
  })
);

module.exports = router;
