import React, { useContext } from 'react';  // Import useContext
import { UserContext } from './UserContext';  // Import UserContext

function UserInfo() {
  // Access user data from context using useContext
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserInfo;
