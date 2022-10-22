const mongoose = require("mongoose");
const commentschema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("COMMENT", commentschema);

module.exports = Comment;
