import axios from 'axios';

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com/users/';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    // Fetch data from the GitHub API for the given username
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.data; // Return the user data
  } catch (error) {
    // Throw error if the user doesn't exist or the API request fails
    throw new Error('Error fetching user data');
  }
};

