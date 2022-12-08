import React from 'react';

const Post = ({ post }) => {
    const { posterName, posterEmail, posterImg, postImg, postDate, postBody } = post;
    return (
        <div className="rounded-md shadow-md my-2 w-full dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src={posterImg} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold leading-none">{posterName}</h2>
                        <span className="inline-block text-xs leading-none dark:text-gray-400">{postDate}</span>
                    </div>
                </div>
                <button title="Open options" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                </button>
            </div>
            <img src={postImg} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="p-3">
                <div className="flex flex-wrap items-center pt-3 pb-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">
                            {postBody}
                        </span>
                    </div>
                </div>
                <div className="flex-1 h-px w-full my-4 dark:bg-gray-700"></div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button type="button" title="Like post" className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                            </svg>
                        </button>
                    </div>
                    <button type="button" title="Bookmark post" className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-wrap items-center pt-3 pb-1">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm">Liked by
                            <span className="font-semibold">Mamba UI</span>and
                            <span className="font-semibold">86 others</span>
                        </span>
                    </div>
                </div>
                <div className="space-y-3">
                    <p className="text-sm">
                        <span className="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
                    </p>
                    <input type="text" placeholder="Add a comment..." className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                </div>
            </div>
        </div>
    );
};

export default Post;