import React from 'react';
import { useUser } from './UserContext';  // Import the useUser hook

function UserInfo() {
    const userData = useUser();  // Consume userData from the context

    return <UserDetails userData={userData} />;
}

export default UserInfo;
