import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import LogOut from "../Pages/LogOut";
import Registration from "../Pages/Registration";
import MyProfile from "../Pages/MyProfile";

import GameDetails from "../Pages/GameDetails";
import ProtectedRoute from "../Components/Layout/ProtectedRoute";



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

