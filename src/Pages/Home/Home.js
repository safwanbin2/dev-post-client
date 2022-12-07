import React from 'react';
import CreatePost from './CreatePost/CreatePost';

const Home = () => {
  return (
    <div className='w-[700px] mx-auto min-h-screen'>
      <CreatePost></CreatePost>
    </div>
  );
};

export default Home;