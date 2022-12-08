import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SkeletonLoading from '../../../Components/SkeletonLoading';
import Post from './Post';

const PostContainer = () => {
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts`)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <SkeletonLoading></SkeletonLoading>
    }
    return (
        <div>
            {
                posts.map(post => <Post
                    key={post._id}
                    post={post}
                ></Post>)
            }
        </div>
    );
};

export default PostContainer;