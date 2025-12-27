import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams(); // Grabs the _id from the URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/getSinglePost/${id}`);
        setPost(res.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPost();
  }, [id]);

  if (loading) return <div className="flex h-screen items-center justify-center font-bold">Loading...</div>;
  if (!post) return <div className="text-center mt-20 font-bold">Post not found!</div>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* The Card Container */}
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* 1. THE CROSS BUTTON (Top Right) */}
        <button 
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl font-bold"
        >
          ✕
        </button>

        {/* 2. ONLY THAT IMAGE */}
        <div className="h-72 sm:h-96 w-full">
          <img 
            src={post.imageURL} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* 3. POST DETAILS */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-purple-100 text-purple-700 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
              Selected Post
            </span>
          </div>
          
          <h1 className="text-2xl font-black text-gray-800 leading-tight">
            {post.title}
          </h1>
          
          <div className="mt-6 flex items-center justify-between border-t pt-4">
             <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-full" />
                <span className="text-sm font-bold text-gray-600">User Community</span>
             </div>
             <p className="text-[10px] text-gray-400 font-mono italic">Ref: {post._id.slice(-6)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;