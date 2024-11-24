// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';              // Import Profile component
import ProfileDetails from './components/ProfileDetails';  // Import ProfileDetails component
import ProfileSettings from './components/ProfileSettings';  // Import ProfileSettings component
import Home from './components/Home';                      // Import Home component
import Post from './components/Post';                      // Import Post component
import NotFound from './components/NotFound';              // Import NotFound component

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);  // Simulated authentication state

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/post/1">Post 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* Define the routes for the top-level components */}
          <Route path="/" element={<Home />} />
          
          {/* Nested routes for Profile */}
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          
          {/* Dynamic route for post */}
          <Route path="/post/:postId" element={<Post />} />
          
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




