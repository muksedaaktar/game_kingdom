import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import LogOut from "../Pages/LogOut";
import Registration from "../Pages/Registration";
import MyProfile from "../Pages/MyProfile";
import Games from "../Pages/Games";


export const router = createBrowserRouter([
     {
        path : "/",
        element: <MainLayout/>,
        children : [
            {
                index : true,
                element : <HomePage/>
            },
            {
                path : '/games',
                element : <Games/>
            },
            {
                path : '/login',
                element : <Login/>
            },
             {
                path : '/logout',
                element : <LogOut/>
            },
             {
                path : '/registration',
                element : <Registration/>
            },
             {
                path : '/my-profile',
                element : <MyProfile/>
            }

        ]
     }

])

