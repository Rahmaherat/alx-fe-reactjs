// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from 'AuthContext'; // Import AuthProvider
import Home from './components/Home';            // Home component
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import BlogPost from './components/BlogPost';    // BlogPost component (to be created)
import NotFound from './components/NotFound';    // 404 Not Found component

function App() {
  return (
     <AuthProvider> {/* Wrap the app in AuthProvider */}
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
              {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute> {/* Protect the /profile route */}
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes under /profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic Route */}
          <Route path="/user/:username" element={<UserProfile />} />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          
          {/* Dynamic route for Blog Post */}
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
           </AuthProvider>
  );
}

export default App;




