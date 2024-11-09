import React from 'react';
import UserDetails from './UserDetails'; // UserDetails no longer needs userData prop

function UserInfo() {
  return <UserDetails />; // Just render UserDetails without passing userData
}

export default UserInfo;
