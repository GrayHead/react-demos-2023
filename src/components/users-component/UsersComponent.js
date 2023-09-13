import React from 'react';
import UserComponent from "../user-component/UserComponent";

const UsersComponent = ({users}) => {
    return (
        <div>
            {
                users.map((value) => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersComponent;
