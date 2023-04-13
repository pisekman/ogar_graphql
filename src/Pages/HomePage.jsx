import React from 'react';
import PostsList from '../components/PostsList';

const HomePage = () => {
  return (
    <div className='mainContainer container'>
      <div className='mainContainer--left'>
        <PostsList />
      </div>
      <div className='mainContainer--right'>rightSide</div>
    </div>
  );
};

export default HomePage;
