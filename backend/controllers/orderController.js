const Order = require("../models/Order");
const Product = require("../models/Product");

const createOrder = async (req, res) => {
    try {

        const {
            userId,
            productId,
            orderType,
            quantity,
            rentalStartDate,
            rentalEndDate
        } = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let totalAmount = 0;

        if (orderType === "buy") {

            totalAmount = product.buyPrice * quantity;

        } else {

            const start = new Date(rentalStartDate);
            const end = new Date(rentalEndDate);

            const days =
                Math.ceil(
                    (end - start) /
                    (1000 * 60 * 60 * 24)
                ) + 1;

            totalAmount =
                days *
                product.rentPricePerDay *
                quantity;
        }

        const order = await Order.create({
            userId,
            productId,
            orderType,
            quantity,
            rentalStartDate,
            rentalEndDate,
            totalAmount
        });

        res.status(201).json({
            message: "Order placed successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getOrders = async (req, res) => {

    try {

        const orders = await Order.find()
            .populate("userId", "name email")
            .populate("productId", "name buyPrice");

        res.json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    createOrder,
    getOrders
};