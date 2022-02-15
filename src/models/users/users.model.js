const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required: true,
      immutable: true,
      unique: true
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    accessToken: {
      type: String,
    },
    resetToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = { User: model("user", userSchema) };
