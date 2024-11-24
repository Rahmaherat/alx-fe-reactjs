import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'AuthContext'; // Import the useAuth hook

function ProtectedRoute({ element, isAuthenticated }) {
  const { isAuthenticated } = useAuth(); 
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
