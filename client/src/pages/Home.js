import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-10">Loading Feed...</div>;

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-black mb-8 text-gray-900">Post Feed</h1>

      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
          <p className="text-gray-500">No posts yet. Start by creating one!</p>
        </div>
      ) : (
        <div className="space-y-10">
          {posts.data.map((post) => (
            <div
              key={post._id}
              onDoubleClick={() => navigate(`/post/${post._id}`)} //handling double click for single post view
              className="bg-white border rounded-sm overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-2xl cursor-pointer"
              title="Double click to view details"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={post.imageURL}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
                {/* Delete Button - Top Right Overlay */}
                <button
                  onClick={(e) => handleDelete(e, post._id)}
                  className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                  title="Delete Post"
                >
                  🗑️
                </button>
              </div>

              {/* Caption Section */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-purple-600 font-bold uppercase tracking-widest">
                      {new Date(post.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center text-gray-400 text-sm">
                  <span className="mr-2">🖱️ Double-click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
