import mongoose from "mongoose";

const order = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  userInfo: {
    type: {
      name: String,
      email: String,
      phone: String,
      address: String,
    },
    required: true,
  },
  orderList: {
    type: [
      {
        id: Number,
        name: String,
        image: String,
        price: Number,
        fav: String,
        quantity: Number,
      },
    ],
    required: true,
  },
});

export default mongoose.model("Order", order);
