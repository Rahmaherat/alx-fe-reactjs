import React from 'react';
import { UserProvider } from './UserContext';  // Import the UserProvider
import ProfilePage from './ProfilePage';

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

    return (
        <UserProvider userData={userData}>  {/* Provide userData to the context */}
            <ProfilePage />
        </UserProvider>
    );
}

export default App;
