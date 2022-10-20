const mongoose = require("mongoose");
const threadschema = new mongoose.Schema(
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

const Thread = mongoose.model("THREAD", threadschema);

module.exports = Thread;
