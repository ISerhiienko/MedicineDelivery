import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import getStores from "./routes/getStores.js";
import addToFavorite from "./routes/addToFavorite.js";
import saveOrder from "./routes/saveOrder.js";
import getOrdersList from "./routes/getOrdersList.js";

const server = express();
const PORT = 3000;

server.use(express.json());
server.use(cors());

mongoose.connect(process.env.DB_LOCATION, {
  autoIndex: true,
});

server.listen(PORT, () => {
  console.log("listening on port ->", PORT);
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connection to database successful");
});

server.use("/", getStores);
server.use("/", addToFavorite);
server.use("/", saveOrder);
server.use("/", getOrdersList);
