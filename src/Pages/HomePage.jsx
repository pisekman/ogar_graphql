import React from 'react';
import PostsList from '../components/PostsList';
import PostLatest from '../components/PostLatest';

const HomePage = () => {
  return (
    <div className='mainContainer container'>
      <div className='mainContainer--left'>
        <PostsList />
      </div>
      <div className='mainContainer--right'>
        <PostLatest />
      </div>
    </div>
  );
};

export default HomePage;
