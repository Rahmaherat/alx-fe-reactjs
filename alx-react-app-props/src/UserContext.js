import React, { createContext, useContext } from 'react';

// Create the UserContext
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => {
    return useContext(UserContext);
};

// Create the UserProvider component
export const UserProvider = ({ children, userData }) => {
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
};
