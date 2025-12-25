const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  updatePost,
  getAllPosts,
} = require("../controller/postController.js");

router.get("/getAllPosts", getAllPosts);
router.post("/createPost", createPost);
router.put("/updatePost", updatePost);
router.delete("/deletePost", deletePost);

module.exports = router;
