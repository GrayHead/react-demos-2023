import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../services/users.api.service";
import UserComponent from "../user-component/UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then(value =>
            setUsers(value));
    }, []);


    return (
        <div>
            {
                users.map(value => <UserComponent item={value} key={value.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
