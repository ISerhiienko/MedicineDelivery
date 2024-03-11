import express from "express";
import Stores from "../models/Stores.js";

const router = express.Router();

router.get("/get-stores", (req, res) => {
  Stores.find({})

    .then((stores) => {
      return res.status(200).json(stores);
    })
    .catch((err) => {
      console.log(err.message);
      return res.status(500).json({ error: err.message });
    });
});

export default router;
