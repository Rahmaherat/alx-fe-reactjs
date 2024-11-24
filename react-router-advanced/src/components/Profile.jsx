// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';  // Link for navigation and Outlet for nested routes

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

      {/* This is where nested routes will render */}
      <Outlet />
    </div>
  );
}

export default Profile;



