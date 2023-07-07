import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,

      required: true,
    },
    email: {
      type: String,

      required: true,
    },
    category: {
      type: String,

      required: true,
    },
    title: {
      type: String,

      required: true,
    },
    price: {
      type: String,

      required: true,
    },
    image: {
      type: String,

      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
