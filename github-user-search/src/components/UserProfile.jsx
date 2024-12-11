import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return null; // Return nothing if no user is passed

  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} className="user-avatar" />
      <h2>{user.name || user.login}</h2> {/* Display name if available, else fallback to login */}
      <p>{user.bio || 'No bio available'}</p> {/* Display bio, fallback if not available */}
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserProfile;


