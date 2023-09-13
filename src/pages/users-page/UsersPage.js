import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import UsersComponent from "../../components/users-component/UsersComponent";

const UsersPage = () => {
    const users = useLoaderData();

    return (
        <div>
            <UsersComponent users={users}/>
            <hr/>
            <hr/>
            <Outlet/>
            <hr/>
            <hr/>
        </div>
    );
};

export default UsersPage;
