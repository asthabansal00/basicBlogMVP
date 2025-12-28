import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const cloudRes = await axios.post(cloudinaryUrl, formData);
      const imageUrlFromCloud = cloudRes.data.secure_url;

      await axios.post("http://localhost:5000/api/posts/createPost", {
        title: title,
        imageURL: imageUrlFromCloud,
      });

      alert("Post uploaded!");
      navigate("/");
    } catch (err) {
      console.error("Error Detail:", err);
      alert(err.response?.data?.error?.message || "Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* MATCHING HOME PAGE BACKGROUND */
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex items-center justify-center p-6">
      
      {/* --- MATCHING ANIMATED BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[100px] animate-pulse"></div>
      </div>

      {/* --- CREATE POST CARD --- */}
      <div className="relative z-10 bg-white/90 backdrop-blur-xl w-full max-w-md rounded-[40px] shadow-2xl p-8 border border-white/20">
        
        <header className="mb-8">
          <button 
            onClick={() => navigate("/")} 
            className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 block hover:underline"
          >
            ← Back to Feed
          </button>
          <h1 className="text-3xl font-black text-gray-900 italic tracking-tighter">
            CREATE POST
          </h1>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Image Preview Area */}
          <div className="flex flex-col">
            <label className="block w-full cursor-pointer">
              {!preview ? (
                <div className="h-64 border-2 border-dashed border-indigo-100 rounded-[30px] flex flex-col items-center justify-center bg-gray-50/50 hover:bg-indigo-50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-indigo-600 text-xl">+</span>
                  </div>
                  <span className="text-indigo-600 font-bold text-sm tracking-tight">
                    Upload Photo
                  </span>
                </div>
              ) : (
                <div className="relative group">
                   <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-[30px] shadow-lg border-4 border-white"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-[30px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-white text-xs font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">Change Photo</span>
                  </div>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Caption Box */}
          <div className="flex flex-col">
            <label className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2 ml-2">
              Caption
            </label>
            <textarea
              placeholder="What's on your mind?"
              className="w-full border-none bg-gray-100/50 p-5 rounded-[25px] outline-none focus:ring-2 focus:ring-indigo-400 transition-all resize-none text-gray-800 font-medium placeholder:text-gray-400"
              rows="3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Post Button */}
          <button
            type="submit"
            disabled={loading || !imageFile}
            className={`w-full py-5 rounded-[25px] font-black text-white text-sm tracking-widest uppercase shadow-xl transition-all ${
              loading || !imageFile
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-95"
            }`}
          >
            {loading ? "UPLOADING..." : "SHARE POST"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // CLOUDINARY STRINGS
//   const CLOUD_NAME = "dpui63d1d";
//   const UPLOAD_PRESET = "kct6jb77";

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!imageFile) return alert("Please select an image");
//     setLoading(true);

//     try {
//       // --- STEP 1: UPLOAD TO CLOUDINARY ---
//       // error checking
//       console.log("cloudname " + CLOUD_NAME);
//       console.log("upload preset " + UPLOAD_PRESET);

//       const formData = new FormData();
//       formData.append("file", imageFile);
//       formData.append("upload_preset", UPLOAD_PRESET);

//       const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

//       const cloudRes = await axios.post(cloudinaryUrl, formData);
//       const imageUrlFromCloud = cloudRes.data.secure_url;

//       // --- STEP 2: SAVE URL TO THE DATABASE ---
//       await axios.post("http://localhost:5000/api/posts/createPost", {
//         title: title,
//         imageURL: imageUrlFromCloud,
//       });

//       alert("Post uploaded !");
//       navigate("/");
//     } catch (err) {
//       console.error("Error Detail:", err);
//       // Cloudinary or Backend fail check
//       alert(
//         err.response?.data?.error?.message ||
//           "Network Error: Check if server is running or Cloudinary name is correct"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-6">
//       <div className="bg-white/95 backdrop-blur-sm w-full max-w-md rounded-3xl shadow-2xl p-8">
//         <h1 className="text-2xl font-black text-center mb-8 text-gray-800">
//           ✨ Create a Post
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
//           {/* 1. Image Preview Area */}
//           <div className="flex flex-col">
//             <label className="block w-full cursor-pointer">
//               {!preview ? (
//                 <div className="h-56 border-2 border-dashed border-purple-200 rounded-2xl flex flex-col items-center justify-center bg-gray-50 hover:bg-purple-50 transition-all">
//                   <span className="text-purple-600 font-bold">
//                     + Upload Image
//                   </span>
//                 </div>
//               ) : (
//                 <img
//                   src={preview}
//                   alt="Preview"
//                   className="w-full h-56 object-cover rounded-2xl border-2 border-purple-100 shadow-md"
//                 />
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={handleImageChange}
//               />
//             </label>
//           </div>

//           {/* 2. Caption Box */}
//           <div className="flex flex-col">
//             <label className="text-sm font-bold text-gray-600 mb-2 ml-1">
//               💬 Caption
//             </label>
//             <textarea
//               placeholder="Write something cool..."
//               className="w-full border border-gray-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none shadow-inner"
//               rows="3"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           {/* 3. Post Button */}
//           <button
//             type="submit"
//             disabled={loading || !imageFile}
//             className={`w-full py-4 rounded-2xl font-black text-white text-lg shadow-lg transition-all ${
//               loading || !imageFile
//                 ? "bg-gray-300 cursor-not-allowed"
//                 : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] active:scale-95"
//             }`}
//           >
//             {loading ? "🚀 SHARING..." : "🚀 POST"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreatePost;