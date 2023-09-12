import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            main page 1
            <ul>
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>

            <hr/>

            <Outlet/>
            <hr/>
        </div>
    );
};

export default MainPage;
