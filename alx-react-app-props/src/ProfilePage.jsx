import React from 'react';
import UserInfo from './UserInfo'; // UserInfo no longer needs userData prop

function ProfilePage() {
  return <UserInfo />; // Just render UserInfo without passing userData
}

export default ProfilePage;
