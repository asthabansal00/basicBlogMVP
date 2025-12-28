// // import React, { useEffect, useState } from "react";
// // import { fetchPosts } from "../services/api";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const Home = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeMenu, setActiveMenu] = useState(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchPosts()
// //       .then((response) => {
// //         setPosts(Array.isArray(response.data) ? response.data : []);
// //         setLoading(false);
// //       })
// //       .catch(() => setLoading(false));
// //   }, []);

// //   const formatDate = (dateString) => {
// //     if (!dateString) return "";
// //     const date = new Date(dateString);
// //     return isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
// //   };

// //   const handleDelete = async (id) => {
// //     if (window.confirm("Delete this post?")) {
// //       try {
// //         const res = await axios.delete(`http://localhost:5000/api/posts/deletePost/${id}`);
// //         if (res.status === 200) {
// //           setPosts(posts.filter((p) => p._id !== id));
// //           setActiveMenu(null);
// //         }
// //       } catch (err) { alert("Delete failed"); }
// //     }
// //   };

// //   if (loading) return <div className="h-screen flex items-center justify-center text-white font-bold bg-indigo-900">Loading SnapStream...</div>;

// //   return (
// //     <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      
// //       {/* --- COOL ANIMATED BACKGROUND BLOBS --- */}
// //       <div className="fixed inset-0 z-0">
// //         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
// //         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] animate-bounce" style={{animationDuration: '8s'}}></div>
// //         <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[100px] animate-pulse"></div>
// //       </div>

// //       {/* --- MAIN CONTENT --- */}
// //       <div className="relative z-10 max-w-[480px] mx-auto pt-8 pb-20 px-4">
        
// //         <header className="flex justify-between items-center mb-10 px-2">
// //           <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic tracking-tighter">
// //             BLOG STREAM
// //           </h1>
// //           <button 
// //             onClick={() => navigate('/create')}
// //             className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-xs font-bold border border-white/20 transition-all shadow-xl"
// //           >
// //             + NEW POST
// //           </button>
// //         </header>

// //         <div className="flex flex-col gap-10">
// //           {posts.map((post) => (
// //             <article key={post._id} className="relative shadow-2xl rounded-[35px] overflow-hidden bg-white/95 backdrop-blur-sm border border-white/10">
              
// //               {/* TOP BAR */}
// //               <div className="p-5 px-7 flex justify-between items-center">
// //                 <div>
// //                   <h3 className="font-extrabold text-gray-900 text-base uppercase tracking-tight">{post.title}</h3>
// //                   <span className="text-[10px] text-indigo-600 font-black tracking-widest">
// //                     {formatDate(post.createdAt)}
// //                   </span>
// //                 </div>

// //                 <div className="relative">
// //                   <button 
// //                     onClick={() => setActiveMenu(activeMenu === post._id ? null : post._id)}
// //                     className="text-gray-300 text-2xl px-2 hover:text-indigo-600 transition-colors"
// //                   >
// //                     •••
// //                   </button>

// //                   {activeMenu === post._id && (
// //                     <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-1">
// //                       <button 
// //                         onClick={() => handleDelete(post._id)}
// //                         className="w-full px-5 py-3 text-left text-xs font-bold text-red-500 hover:bg-red-50 transition-colors"
// //                       >
// //                         🗑️ Delete Post
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               {/* IMAGE SECTION */}
// //               <div 
// //                 onDoubleClick={() => navigate(`/post/${post._id}`)}
// //                 className="bg-black leading-[0] block overflow-hidden cursor-pointer"
// //               >
// //                 <img 
// //                   src={post.imageURL} 
// //                   alt="" 
// //                   className="w-full h-auto block m-0 p-0 hover:scale-105 transition-transform duration-700" 
// //                 />
// //               </div>

// //               {/* BOTTOM BAR */}
// //               <div className="p-6 flex items-center justify-between bg-white">
// //                 <div className="flex gap-6 text-2xl text-gray-800">
// //                   <button className="hover:scale-125 transition-transform">♡</button>
// //                   <button className="hover:scale-125 transition-transform">💬</button>
// //                 </div>
// //                 <div className="flex gap-1.5">
// //                   <div className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce"></div>
// //                   <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
// //                   <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{animationDelay: '0.4s'}}></div>
// //                 </div>
// //               </div>
// //             </article>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useEffect, useState } from "react";
// import { fetchPosts } from "../services/api";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPosts()
//       .then((response) => {
//         setPosts(Array.isArray(response.data) ? response.data : []);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", { 
//       month: "short", 
//       day: "numeric" 
//     });
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Delete this post?")) {
//       try {
//         const res = await axios.delete(`http://localhost:5000/api/posts/deletePost/${id}`);
//         if (res.status === 200) {
//           setPosts(posts.filter((p) => p._id !== id));
//           setActiveMenu(null);
//         }
//       } catch (err) { alert("Delete failed"); }
//     }
//   };

//   if (loading) return <div className="h-screen w-full flex items-center justify-center bg-slate-900 text-white font-bold">Loading...</div>;

//   return (
//     /* V4 GRADIENT SYNTAX: bg-linear-to-br */
//     <div className="min-h-screen w-full bg-linear-to-br from-[#ff0080] via-[#7928ca] to-[#4299e1] py-10 px-4">
      
//       <div className="max-w-[480px] mx-auto">
//         <header className="flex justify-between items-center mb-8 px-2">
//           <h1 className="text-3xl font-black text-white italic tracking-tighter">SNAPSTREAM</h1>
//           <button 
//             onClick={() => navigate('/create')}
//             className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs font-bold border border-white/30 transition-all"
//           >
//             + NEW POST
//           </button>
//         </header>

//         <div className="flex flex-col gap-8">
//           {posts.map((post) => (
//             <article key={post._id} className="relative shadow-2xl rounded-[32px] overflow-hidden bg-white">
              
//               {/* TOP BAR */}
//               <div className="p-4 px-6 flex justify-between items-center border-b border-gray-50">
//                 <div className="flex flex-col">
//                   <span className="font-bold text-gray-900 text-sm uppercase tracking-tight">{post.title}</span>
//                   <span className="text-[10px] text-purple-500 font-bold uppercase">
//                     {formatDate(post.createdAt)}
//                   </span>
//                 </div>

//                 <div className="relative">
//                   <button 
//                     onClick={() => setActiveMenu(activeMenu === post._id ? null : post._id)}
//                     className="text-gray-300 text-xl font-bold px-2 hover:text-gray-600"
//                   >
//                     •••
//                   </button>

//                   {activeMenu === post._id && (
//                     <div className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden">
//                       <button 
//                         onClick={() => handleDelete(post._id)}
//                         className="w-full px-4 py-3 text-left text-xs font-bold text-red-500 hover:bg-red-50"
//                       >
//                         Delete Post
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* IMAGE: Zero gap logic */}
//               <div 
//                 onDoubleClick={() => navigate(`/post/${post._id}`)}
//                 className="bg-black leading-none block overflow-hidden cursor-pointer"
//               >
//                 <img 
//                   src={post.imageURL} 
//                   alt="" 
//                   className="w-full h-auto block m-0 p-0 transform transition-transform duration-500 hover:scale-105" 
//                 />
//               </div>

//               {/* BOTTOM BAR */}
//               <div className="p-5 flex items-center justify-between">
//                 <div className="flex gap-5 text-2xl text-gray-800">
//                   <button className="hover:text-red-500 transition-colors">♡</button>
//                   <button className="hover:text-blue-500 transition-colors">💬</button>
//                 </div>
//                 <div className="text-[9px] font-mono text-gray-300 uppercase tracking-tighter">ID: {post._id.slice(-4)}</div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setPosts(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? "" : date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this post?")) {
      try {
        const res = await axios.delete(`http://localhost:5000/api/posts/deletePost/${id}`);
        if (res.status === 200) {
          setPosts(posts.filter((p) => p._id !== id));
          setActiveMenu(null);
        }
      } catch (err) { alert("Delete failed"); }
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center text-white font-bold bg-indigo-900">Loading SnapStream...</div>;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      
      {/* --- COOL ANIMATED BACKGROUND BLOBS --- */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/30 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-pink-600/20 blur-[100px] animate-pulse"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-[480px] mx-auto pt-8 pb-20 px-4">
        
        <header className="flex justify-between items-center mb-10 px-2">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic tracking-tighter">
            BLOGSTREAM
          </h1>
          <button 
            onClick={() => navigate('/create')}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-xs font-bold border border-white/20 transition-all shadow-xl"
          >
            + NEW POST
          </button>
        </header>

        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article key={post._id} className="relative shadow-2xl rounded-[35px] overflow-hidden bg-white/95 backdrop-blur-sm border border-white/10">
              
              {/* TOP BAR */}
              <div className="p-5 px-7 flex justify-between items-center">
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base uppercase tracking-tight">{post.title}</h3>
                  <span className="text-[10px] text-indigo-600 font-black tracking-widest">
                    {formatDate(post.createdAt)}
                  </span>
                </div>

                <div className="relative">
                  <button 
                    onClick={() => setActiveMenu(activeMenu === post._id ? null : post._id)}
                    className="text-gray-300 text-2xl px-2 hover:text-indigo-600 transition-colors"
                  >
                    •••
                  </button>

                  {activeMenu === post._id && (
                    <div className="absolute right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-1">
                      <button 
                        onClick={() => handleDelete(post._id)}
                        className="w-full px-5 py-3 text-left text-xs font-bold text-red-500 hover:bg-red-50 transition-colors"
                      >
                        🗑️ Delete Post
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div 
                onDoubleClick={() => navigate(`/post/${post._id}`)}
                className="bg-black leading-[0] block overflow-hidden cursor-pointer"
              >
                <img 
                  src={post.imageURL} 
                  alt="" 
                  className="w-full h-auto block m-0 p-0 hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* BOTTOM BAR */}
              <div className="p-6 flex items-center justify-between bg-white">
                <div className="flex gap-6 text-2xl text-gray-800">
                  <button className="hover:scale-125 transition-transform">♡</button>
                  <button className="hover:scale-125 transition-transform">💬</button>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-pink-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;