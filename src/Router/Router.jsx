import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import LogOut from "../Pages/LogOut";
import Registration from "../Pages/Registration";
import MyProfile from "../Pages/MyProfile";

import GameDetails from "../Pages/GameDetails";
import ProtectedRoute from "../Components/Layout/ProtectedRoute";
import ForgotPassword from "../Pages/ForgotPassword";
import Menu from "../Pages/Menu";
import UpdateProfile from "../Pages/UpdateProfile";
import NotFound from "../Pages/NotFound";




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
                path : '/login',
                element : <Login/>
            },
            {
                path : '/registration',
                element : <Registration/>
            },
            {
                path : '/forgot-password',
                element : <ForgotPassword/>
            },

             {
                path : '/menu',
                element : <Menu/>
            },

            {
                path : '/update-profile',
                element : <UpdateProfile/>
            },

            



             {
                path : "/game/:id",
                element :<ProtectedRoute>
                         <GameDetails/>
                </ProtectedRoute>
            },
             {
                path : '/logout',
                element : <LogOut/>
            },
            
             {
                path : '/my-profile',
                element : <MyProfile/>
            },

            {
                path : '*',
                element : <NotFound/>
            }

        ]
     }

])

