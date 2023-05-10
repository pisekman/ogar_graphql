import React from 'react';
import PostsList from '../components/PostsList';
import PostLatest from '../components/PostLatest';

const HomePage = () => {
  return (
    <div className='mainContainer container'>
      <section className='mainContainer--left'>
        <PostsList />
      </section>
      <aside className='mainContainer--right'>
        <PostLatest />
      </aside>
    </div>
  );
};

export default HomePage;
