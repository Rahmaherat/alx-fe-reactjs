import React from 'react';
import ProfilePage from './ProfilePage';
import { UserContext.Provider } from './UserContext';  // Import UserProvider

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };  // Example user data

  return (
    <UserProvider value={userData}>  {/* Provide the user data to the entire ProfilePage */}
      <ProfilePage />  {/* ProfilePage has access to the userData via context */}
    </UserProvider>
  );
}

export default App;   

