const express = require("express");
const router = express();
const getOrders = require("../controllers/orderController");
router.get("/", getOrders);

module.exports = router;
