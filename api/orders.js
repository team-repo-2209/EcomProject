const router = require("express").Router();
const { asyncErrorHandler } = require("./utils");
const prisma = require("../prisma/prisma");
const { authRequired } = require("./auth");

router.get(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const orders = await prisma.orders.findMany();
    res.send(orders);
  })
);

router.get(
  "/:orderId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const order = await prisma.orders.findUnique({
      where: {
        id: +req.params.orderId,
      },
    });
    res.send(order);
  })
);

router.patch(
  "/:orderId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const updatedOrder = await prisma.orders.update({
      where: {
        id: +req.params.orderId,
      },
      data: req.body,
    });
    res.send(updatedOrder);
  })
);

router.post(
  "/",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const newOrder = await prisma.orders.create({
      data: req.body,
    });
    res.send(newOrder);
  })
);

router.delete(
  "/:orderId",
  authRequired,
  asyncErrorHandler(async (req, res, next) => {
    const deletedOrder = await prisma.orders.delete({
      where: {
        id: +req.params.orderId,
      },
    });
    res.send(deletedOrder);
  })
);

module.exports = router;
