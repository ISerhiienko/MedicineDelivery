import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Stores", storeSchema, "stores");
