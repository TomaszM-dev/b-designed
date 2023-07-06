import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    message: {
      type: String,
      unique: false,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
