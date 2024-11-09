import React from 'react';
import { useUser } from './UserContext'; // Import the custom useUser hook

function UserDetails() {
  // Access userData from the context
  const { name, email } = useUser(); 

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserDetails;
