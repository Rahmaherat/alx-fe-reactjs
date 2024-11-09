import React from 'react';
import { useUser } from '../UserContext'; // Import the useUser hook

const UserProfile = () => {
    const { name, email } = useUser(); // Access the user data from the context

    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserProfile;
