import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div>
      <nav style={{ padding: '15px', background: '#f4f4f4', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home (Feed)</Link>
        <Link to="/create">Create Post</Link>
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
 
