import React from 'react';
import ProfilePage from './ProfilePage'; 
import { UserProvider } from './UserContext';  // Import the UserProvider component

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };  // Example user data

  return (
    <UserProvider userData={userData}>  {/* Wrap ProfilePage with UserProvider */}
      <ProfilePage />  {/* ProfilePage is now able to access userData via context */}
    </UserProvider>
  );
}

export default App;

