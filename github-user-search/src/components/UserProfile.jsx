import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
};

export default UserProfile;

