// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';              // Import Profile component
import ProfileDetails from './components/ProfileDetails';  // Import ProfileDetails
import ProfileSettings from './components/ProfileSettings';  // Import ProfileSettings
import Home from './components/Home';
import Post from './components/Post';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component

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
          <Route path="/" element={<Home />} />
          
          {/* Protected Route for Profile */}
          <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Profile />} />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          
          <Route path="/post/:postId" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



