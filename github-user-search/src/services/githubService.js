// src/services/githubService.js

import axios from 'axios';

// Function to fetch user data based on username, location, and minimum repositories
export const fetchUserData = async (username, location = '', minRepos = 0) => {
  // Construct the query string based on user inputs
  let query = `user:${username}`;
  
  if (location) {
    query += `+location:${location}`;
  }
  
  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    // Make the GET request to the GitHub API using the search query
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    
    // Return the data from the response
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user data from GitHub:', error);
    throw error;
  }
};

