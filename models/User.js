import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
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
    password: {
      type: String,
      unique: false,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
