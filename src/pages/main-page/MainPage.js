import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <Link to={'/'}>home page</Link>
            <br/>
            <Link to={'users'}>users page</Link>

            <hr/>
            <Outlet/>
            <hr/>

        </div>
    );
};

export default MainPage;
