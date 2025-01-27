const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    Job_title: {
      type: String,
    },
  },
  { timestamps: true }
);

const USER = mongoose.model("User", userSchema);

module.exports= {USER};
