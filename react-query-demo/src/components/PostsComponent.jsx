// src/components/PostsComponent.js

import React from 'react';
import { useQuery } from 'react-query'; // Importing the useQuery hook
import axios from 'axios'; // We will use axios for fetching data

// Function to fetch posts from the API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Using the useQuery hook to fetch data
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    // Options for query
    staleTime: 5 * 60 * 1000, // Data will be considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache time for data
  });

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      {/* Button to trigger refetch */}
      <button onClick={refetch}>Refetch Data</button>
      
      <ul>
        {/* Render posts */}
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
