import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    cardHolderName: {
      type: String,

      required: true,
    },
    cardNumber: {
      type: String,

      required: true,
    },
    cvc: {
      type: String,

      required: true,
    },
    payment: {
      type: String,

      required: true,
    },
    username: {
      type: String,

      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
