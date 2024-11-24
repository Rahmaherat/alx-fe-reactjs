// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Link for navigation and Outlet to render nested routes
import ProfileDetails from './ProfileDetails';    // Import ProfileDetails component
import ProfileSettings from './ProfileSettings';  // Import ProfileSettings component

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Render the matched nested route component here */}
      <Outlet />
    </div>
  );
}

export default Profile;



