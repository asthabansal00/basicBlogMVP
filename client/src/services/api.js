import axios from "axios";

// Function to get all posts from your Node backend
export const fetchPosts = () => axios.get("http://localhost:5000/api/posts/getAllPosts");

// Function to send a new post to your Node backend
export const createPost = (newPost) => axios.post("http://localhost:5000/api/posts/createPost", newPost);

// Function to get a single post by ID from your Node backend
export const fetchSinglePost = (id) => axios.get(`http://localhost:5000/api/posts/getSinglePost/${id}`);
