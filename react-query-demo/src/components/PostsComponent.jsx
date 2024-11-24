import React from 'react';
import { useQuery } from 'react-query'; // Importing useQuery hook from react-query
import axios from 'axios'; // Importing axios to fetch data

// Function to fetch posts from the API
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data; // Returning the data from the response
};

const PostsComponent = () => {
  // Using useQuery to fetch posts
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cache data for 10 minutes
  });

  if (isLoading) return <div>Loading...</div>; // Display loading message
  if (isError) return <div>Error: {error.message}</div>; // Display error message

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Data</button> {/* Refetch data button */}
      <ul>
        {data.map((post) => (
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

