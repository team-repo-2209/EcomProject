const router = require("express").Router();

router.use("/categories", require("./categories"));
router.use("/order_products", require("./order_products"));
router.use("/orders", require("./orders"));
router.use("/products", require("./products"));
// router.use("/users", require("./users"));

module.exports = router;
