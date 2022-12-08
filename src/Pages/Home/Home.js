import React from 'react';
import CreatePost from './CreatePost/CreatePost';
import PostContainer from './Posts/PostContainer';

const Home = () => {
  return (
    <div className='w-[700px] mx-auto min-h-screen'>
      <CreatePost></CreatePost>
      <div className="flex-1 h-px w-full my-4 dark:bg-gray-700"></div>
      <PostContainer></PostContainer>
    </div>
  );
};

export default Home;