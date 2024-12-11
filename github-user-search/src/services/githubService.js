import axios from 'axios';

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com/users/';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
