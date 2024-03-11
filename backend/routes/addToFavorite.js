import express from "express";
import Stores from "../models/Stores.js";

const router = express.Router();

router.put("/add-favorite/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const store = await Stores.findOne({ "drugs.id": id });

    if (!store) {
      return res.status(404).json({ message: "Товар не знайдено" });
    }

    const drug = store.drugs.find((drug) => drug.id === parseInt(id));

    drug.fav = drug.fav === "true" ? "false" : "true";

    await store.save();

    return res
      .status(200)
      .json({ message: "fav field successfully changed", drug });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "server error" });
  }
});

export default router;
