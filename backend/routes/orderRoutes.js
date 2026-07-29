const express = require("express");

const router = express.Router();

const {
    createOrder,
    getOrders
} = require("../controllers/orderController");

router.post("/place", createOrder);

router.get("/", getOrders);

module.exports = router;