import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import UsersPage from "./pages/users-page/UsersPage";
import UserPostsPage from "./pages/user-posts/UserPostsPage";
import {getAllusers, getPostsOfUserById} from "./services/api.service";

const root =
    ReactDOM.createRoot(document.getElementById('root'));


const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainPage/>,
            children: [
                {
                    path: 'users',
                    element: <UsersPage/>,
                    loader: getAllusers,
                    children: [
                        {
                            // /users/100500
                            path: ':id', element: <UserPostsPage/>,
                            loader: getPostsOfUserById
                        }
                    ]
                },

            ]
        }
    ]
);

root.render(
    <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
