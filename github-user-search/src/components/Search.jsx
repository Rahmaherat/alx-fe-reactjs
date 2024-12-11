import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserProfile from "./UserProfile";

const Search = () => {
  const [username, setUsername] = useState("");      // To store search input
  const [user, setUser] = useState(null);            // To store fetched user data
  const [loading, setLoading] = useState(false);     // To manage loading state
  const [error, setError] = useState(null);          // To manage error messages

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;  // Don't proceed if no username is provided

    setLoading(true);        // Set loading to true while fetching data
    setError(null);          // Clear previous errors
    setUser(null);           // Clear previous user data

    try {
      // Call the API service to fetch user data
      const data = await fetchUserData(username);
      setUser(data);         // Set fetched user data
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message
    } finally {
      setLoading(false);      // Reset loading state
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a GitHub user"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update state with input value
        />
        <button type="submit">Search</button>
      </form>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error message */}
      {error && <p>{error}</p>}

      {/* Display user profile if available */}
      {user && <UserProfile user={user} />}
    </div>
  );
};

export default Search;
