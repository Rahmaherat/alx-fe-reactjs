import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

export default function Home() {
  const { isAuthenticated, login, logout } = useAuth(); // Access auth state and actions
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={logout}>Log Out</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={login}>Log In</button>
        </div>
      )}
    </div>
  );
}
export default Home;
