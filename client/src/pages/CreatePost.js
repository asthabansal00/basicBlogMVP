import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // CLOUDINARY STRINGS
  const CLOUD_NAME = "dpui63d1d";
  const UPLOAD_PRESET = "kct6jb77";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");
    setLoading(true);

    try {
      // --- STEP 1: UPLOAD TO CLOUDINARY ---
      // error checking
      console.log("cloudname " + CLOUD_NAME);
      console.log("upload preset " + UPLOAD_PRESET);

      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const cloudRes = await axios.post(cloudinaryUrl, formData);
      const imageUrlFromCloud = cloudRes.data.secure_url;

      // --- STEP 2: SAVE URL TO THE DATABASE ---
      await axios.post("http://localhost:5000/api/posts/createPost", {
        title: title,
        imageURL: imageUrlFromCloud,
      });

      alert("Post uploaded !");
      navigate("/");
    } catch (err) {
      console.error("Error Detail:", err);
      // Cloudinary or Backend fail check
      alert(
        err.response?.data?.error?.message ||
          "Network Error: Check if server is running or Cloudinary name is correct"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="bg-white/95 backdrop-blur-sm w-full max-w-md rounded-3xl shadow-2xl p-8">
        <h1 className="text-2xl font-black text-center mb-8 text-gray-800">
          ✨ Create a Post
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* 1. Image Preview Area */}
          <div className="flex flex-col">
            <label className="block w-full cursor-pointer">
              {!preview ? (
                <div className="h-56 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-purple-50 transition-all">
                  <span className="text-purple-600 font-bold">
                    + Upload Image
                  </span>
                </div>
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-56 object-cover rounded-2xl border-2 border-purple-100 shadow-md"
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* 2. Caption Box */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-600 mb-2 ml-1">
              💬 Caption
            </label>
            <textarea
              placeholder="Write something cool..."
              className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none shadow-inner"
              rows="3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* 3. Post Button */}
          <button
            type="submit"
            disabled={loading || !imageFile}
            className={`w-full py-4 rounded-2xl font-black text-white text-lg shadow-lg transition-all ${
              loading || !imageFile
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] active:scale-95"
            }`}
          >
            {loading ? "🚀 SHARING..." : "🚀 POST"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;