import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CreatePost = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>{user}</h2>
            hi
        </div>
    );
};

export default CreatePost;