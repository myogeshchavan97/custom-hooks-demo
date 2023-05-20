import React from 'react';
import { useFetch } from '../custom-hooks/useFetch';

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isError
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }

  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }

  return (
    <ul>
      {posts.map(({ id, userId, title, body }) => (
        <li key={id}>
          <div>Id: {id}</div>
          <div>UserId: {userId}</div>
          <div>Title: {title}</div>
          <div>Body: {body}</div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
