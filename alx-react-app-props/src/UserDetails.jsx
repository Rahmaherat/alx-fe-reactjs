import React from 'react';
import { useUser } from './UserContext';  // Import the useUser hook

function UserDetails() {
    const userData = useUser();  // Consume userData from the context

    return (
        <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

export default UserDetails;
