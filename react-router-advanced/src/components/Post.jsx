import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams(); // Grab dynamic post ID from the URL

  return <h2>Displaying Post {postId}</h2>;
}

export default Post;
