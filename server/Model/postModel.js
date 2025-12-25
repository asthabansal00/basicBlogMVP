const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    autoId: { type: Number, default: 0 },
    title: { type: String, default: "" },
    imageURL: { type: String, default: "" },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("Post", postSchema);
