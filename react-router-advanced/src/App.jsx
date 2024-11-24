// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';            // Home component
import BlogPost from './components/BlogPost';    // BlogPost component (to be created)
import NotFound from './components/NotFound';    // 404 Not Found component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog/1">Blog Post 1</Link>
            </li>
            <li>
              <Link to="/blog/2">Blog Post 2</Link>
            </li>
            <li>
              <Link to="/blog/3">Blog Post 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Dynamic route for Blog Post */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




