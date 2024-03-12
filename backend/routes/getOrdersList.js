import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

router.get("/get-orders/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const orders = await Order.find({ "userInfo.email": email });
    res.status(200).json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
