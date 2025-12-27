const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  updatePost,
  getAllPosts,
  getSinglePost,
} = require("../controller/postController.js");

router.get("/getAllPosts", getAllPosts);
router.get("/getSinglePost/:id", getSinglePost);
router.post("/createPost", createPost);
router.put("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
