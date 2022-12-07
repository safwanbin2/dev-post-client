import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },


    // login laoyut
    {
        path: '/authentication', element: <LoginLayout></LoginLayout>, children: [
            {
                path: '/authentication',
                element: <Login></Login>
            },
            {
                path: '/authentication/signup',
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;