import React from 'react';

const CreatePost = () => {
    return (
        <form className='grid my-1 gap-1' style={{gridTemplateColumns: "5fr 1fr"}}>
            <input type="text" className='border border-blue-400 rounded p-4' />
            <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-800">Post</button>
        </form>
    );
};

export default CreatePost;