import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CreatePost = () => {
    const { user } = useContext(AuthContext);
    const d = new Date();
    const postDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
    const imgBB_key = "f07b3989eaa6a95727955e2a454f8257";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleCreatePost = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        console.log(formData, image, "raw data")
        fetch(`https://api.imgbb.com/1/upload?key=${imgBB_key}`, {
            method: "POST",
            body: formData
        })
            .then(imgData => {
                const body = {
                    posterName: user?.displayName,
                    posterEmail: user?.email,
                    posterImg: user?.photoURL,
                    postBody: data.post,
                    postDate: postDate,
                    postImg: imgData.url
                }
                console.log(imgData)
                fetch(`http://localhost:5000/posts`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Post Submitted')
                    })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleCreatePost)} className='grid my-1 gap-1' style={{ gridTemplateColumns: "5fr 2fr 1fr" }}>
                <input {...register('post', {
                    required: 'Can not post an empty post'
                })} type="text" className='border border-blue-400 bg-gray-200 rounded p-4' />

                <input {...register('img', {
                    required: "Can not be empty"
                })} type="file" className="px-2 py-3 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-800 dark:bg-gray-400" />

                <button type="submit" className="px-8 py-3 font-semibold rounded dark:bg-blue-400 dark:text-gray-800">Post</button>
            </form>
            {(errors.post || errors.img) && <p className='text-sm text-red-500'>{errors?.post?.message}, {errors?.img?.message}</p>}
        </div>
    );
};

export default CreatePost;