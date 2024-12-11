import React, { useState } from "react";
import axios from "axios";  // You can use axios directly in this component if you prefer not to have a separate service

const Search = () => {
  const [username, setUsername] = useState("");  // To store the search input
  const [user, setUser] = useState(null);        // To store user data fetched from GitHub API
  const [loading, setLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(null);      // To manage error messages

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent the form from reloading the page
    if (!username) return;  // Don't fetch if no username is entered

    setLoading(true);        // Show loading state
    setError(null);          // Clear any previous errors
    setUser(null);           // Clear any previously fetched user data

    try {
      // Fetch user data from GitHub API
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const userData = response.data; // Store the response data (user info)

      // Set the fetched user data
      setUser({
        avatar_url: userData.avatar_url,
        login: userData.login,
        name: userData.name,
        bio: userData.bio || "No bio available",
        html_url: userData.html_url,
      });
    } catch (err) {
      // Set an error if something goes wrong (e.g., user not found)
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a GitHub user"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username as the user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering based on loading, error, and user data */}
      {loading && <p>Loading...</p>}  {/* Show loading message while fetching data */}
      {error && <p>{error}</p>}       {/* Show error message if user is not found */}
      
      {user && (
        <div className="user-profile">
          {/* Display user information */}
          <img src={user.avatar_url} alt={user.login} className="user-avatar" />
          <h2>{user.name || user.login}</h2>  {/* Display name if available, otherwise fallback to login */}
          <p>{user.bio}</p>                  {/* Display user bio */}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

