import React, { useState } from "react";
import axios from "axios";  // Import axios for making HTTP requests

const Search = () => {
  const [username, setUsername] = useState("");  // Store username input
  const [location, setLocation] = useState("");  // Store location input
  const [minRepos, setMinRepos] = useState(""); // Store minimum repositories input
  const [users, setUsers] = useState([]);       // Store users data fetched from GitHub API
  const [loading, setLoading] = useState(false); // Manage loading state
  const [error, setError] = useState(null);     // Manage error messages

  // Function to fetch user data from GitHub API with advanced search parameters
  const fetchUserData = async () => {
    const query = `${username ? `user:${username}` : ""}${location ? `+location:${location}` : ""}${minRepos ? `+repos:${minRepos}` : ""}`;
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      return response.data.items; // Return the list of users
    } catch (err) {
      throw new Error("Failed to fetch users.");
    }
  };

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);        // Show loading state
    setError(null);          // Clear any previous errors
    setUsers([]);            // Clear previous search results

    try {
      // Fetch user data from GitHub based on advanced search criteria
      const usersData = await fetchUserData();
      setUsers(usersData);   // Set the fetched users data
    } catch (err) {
      setError("No users found based on the provided search criteria.");
    } finally {
      setLoading(false);     // Stop loading
    }
  };

  return (
    <div className="search p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">GitHub User Search</h2>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location:</label>
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Repositories:</label>
          <input
            type="number"
            placeholder="Min Repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>

      {/* Conditional rendering based on loading, error, and user data */}
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Display search results */}
      <div className="mt-6">
        {users.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Search Results:</h3>
            <ul className="space-y-4">
              {users.map((user) => (
                <li key={user.id} className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{user.login}</h4>
                    <p className="text-sm text-gray-500">{user.location || "Location not provided"}</p>
                    <p className="text-sm text-gray-500">Repos: {user.public_repos}</p>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;


