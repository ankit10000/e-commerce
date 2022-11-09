const mongoose = require("mongoose");
const homeschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ques = mongoose.model("QUES", homeschema);

module.exports = Ques;