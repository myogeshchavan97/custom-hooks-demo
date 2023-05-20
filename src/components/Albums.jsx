import React from 'react';
import { useFetch } from '../custom-hooks/useFetch';

const Albums = () => {
  const {
    data: albums,
    isLoading,
    isError
  } = useFetch('https://jsonplaceholder.typicode.com/albums');

  if (isLoading) {
    return <p className='loading'>Loading...</p>;
  }

  if (isError) {
    return <p className='error'>Something went wrong. Try again later.</p>;
  }

  return (
    <ul>
      {albums.map(({ id, userId, title }) => (
        <li key={id}>
          <div>Id: {id}</div>
          <div>UserId: {userId}</div>
          <div>Title: {title}</div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Albums;
