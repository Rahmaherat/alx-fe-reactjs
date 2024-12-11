import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSearch = () => {
    // For now, this will be a placeholder to show the search button works
    console.log(`Searching for user: ${username}`);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Search for a GitHub user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {user && (
          <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

