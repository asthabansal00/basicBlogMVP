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
router.get("/getSinglePost", getSinglePost);
router.post("/createPost", createPost);
router.put("/updatePost", updatePost);
router.delete("/deletePost", deletePost);

module.exports = router;
