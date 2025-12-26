import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This runs as soon as the page loads
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
    <div className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 px-4">Post Feed</h1>
      
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet. Go to 'Create' to upload one!</p>
      ) : (
        <div className="space-y-8">
          {posts.data.map((post) => (
            <div key={post._id} className="bg-white border rounded-sm overflow-hidden shadow-sm">
              {/* Image Section */}
              <img 
                src={post.imageURL} 
                alt={post.title} 
                className="w-full object-cover aspect-square" 
              />
              {/* Caption Section */}
              <div className="p-4">
                <p className="font-semibold text-gray-800">{post.title}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;