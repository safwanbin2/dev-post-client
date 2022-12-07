import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';

const LoginLayout = () => {
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LoginLayout;