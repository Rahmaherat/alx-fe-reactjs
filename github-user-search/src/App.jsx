import React, { useState } from "react";
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  // Handle search button click
  const handleSearch = async () => {
    if (!username) return; // Avoid empty search

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        setUser(null); // If the user is not found, reset the state
      } else {
        setUser(data); // Set user data if found
      }
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
      setUser(null);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <SearchBar
        username={username}
        onChange={(e) => setUsername(e.target.value)}
        onSearch={handleSearch}
      />
      <UserProfile user={user} />
    </div>
  );
}

export default App;


