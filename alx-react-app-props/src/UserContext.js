import React, { createContext, useContext } from 'react';

// Create the context for user data
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Create a provider component that wraps the app and provides the user data
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children} {/* All child components will now have access to userData */}
    </UserContext.Provider>
  );
};

