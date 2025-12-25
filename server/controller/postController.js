const postModel = require("../Model/postModel");

//to update a post
const updatePost = async (req, res) => {
  try {
    const { title, autoId } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Inputs not given" });
    }
    const existingPost = await postModel.findOneAndUpdate(
      { autoId },
      { title: title },
      { new: true }
    );
    if (!existingPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({
      message: "Post updated successfully",
      data: existingPost,
    });
  } catch (err) {
    res.status(500).json({ message: "database error", error: err.message });
  }
};

//to delete a post
const deletePost = async (req, res) => {
  try {
    const { autoId } = req.body;
    if (!autoId) {
      return res.status(400).json({ message: "Inputs not given" });
    }
    const existingPost = await postModel.findOneAndDelete({ autoId });
    if (!existingPost) {
      return res.status(404).json({ message: "post not deleted" });
    }
    return res.status(200).json({
      message: "Post deleted successfully",
      data: existingPost,
    });
  } catch (err) {
    res.status(500).json({ message: "database error", error: err.message });
  }
};

//to create a new post
const createPost = async (req, res) => {
  try {
    const { title, imageURL } = req.body;
    if (!title || !imageURL) {
      return res.status(400).json({ message: "Inputs not given" });
    }
    const total = await postModel.countDocuments();
    const newPost = new postModel({
      autoId: total + 1,
      title: title,
      imageURL: imageURL,
    });
    const savedPost = await newPost.save();
    res.status(201).json({
      message: "Post created successfully",
      data: savedPost,
    });
  } catch (err) {
    res.status(500).json({ message: "database error", error: err.message });
  }
};

//to fetch a single post
const getSinglePost = async (req, res) => {
  try {
    const { autoId } = req.body;
    const singlePost = await postModel.findOne({ autoId });
    if (!singlePost) {
      return res.status(400).json({ message: "Bad Request" });
    }
    return res
      .status(200)
      .json({ message: "post found successfully", data: singlePost });
  } catch (err) {
    res.status(500).json({ message: "database error", error: err.message });
  }
};

//to fetch all posts to the home page
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    if (!posts) {
      return res.status(400).json({ message: "Bad Request" });
    } else if (posts.length === 0) {
      return res.status(404).json({ message: "Posts Not found" });
    } else {
      res
        .status(200)
        .json({ message: "posts found successfully", data: posts });
    }
  } catch (err) {
    res.status(500).json({ message: "database error", errpr: err.message });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getSinglePost,
  getAllPosts,
};
