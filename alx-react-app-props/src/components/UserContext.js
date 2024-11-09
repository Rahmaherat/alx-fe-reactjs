import React, { createContext, useContext } from 'react';

// 1. Create the context for user data
const UserContext = createContext();

// 2. Create a custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext); // Access userData from context
};

// 3. Create a provider component that wraps the app and provides the user data
export const UserProvider = ({ children, userData }) => {
  return (
    <UserContext.Provider value={userData}>
      {children} {/* All child components will now have access to userData */}
    </UserContext.Provider>
  );
};

