import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Logged In successfully')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message)
            })
    }

    const handleGoogle = () => {
        logInWithGoogle()
            .then((result) => {
                const user = result.user;
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL
                }
                saveUser(newUser);
                console.log(user)
                toast.success("Logged In successfully")
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })
    }

    const saveUser = (newUser) => {
        fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(handleLogIn)} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-400">Email</label>
                    <input {...register('email', {
                        required: "Email is Required"
                    })} type="emai" name='email' placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                    {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-400">Password</label>
                    <input {...register('password', {
                        required: "password is required"
                    })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400" />
                    {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <button>Forgot Password?</button>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">Log in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>

            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Dont not have an account?
                <Link to='/authentication/signup' className="underline dark:text-gray-100">Sign up</Link>
            </p>
        </div>
    );
};

export default Login;