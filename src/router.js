import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>}
        ]
    }
]);

export {
    router
}