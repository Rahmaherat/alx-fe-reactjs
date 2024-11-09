import React from 'react';
import ProfilePage from './ProfilePage';
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" }; // Example user data

  return (
    <UserProvider userData={userData}> {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
