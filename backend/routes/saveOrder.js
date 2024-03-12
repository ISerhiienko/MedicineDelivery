import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.post("/save-order", async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(200).send("Order saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving order");
  }
});

export default router;
