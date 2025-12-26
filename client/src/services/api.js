import axios from "axios";

// Function to get all posts from your Node backend
export const fetchPosts = () => axios.get("http://localhost:5000/api/posts/getAllPosts");

