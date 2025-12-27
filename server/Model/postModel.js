const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    imageURL: { type: String, default: "" },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Post", postSchema);
