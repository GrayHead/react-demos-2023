import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({item}) => {
    return (
        <div>

            <Link to={item.id + ''}>{item.id} - {item.name}</Link>
        </div>
    );
};

export default UserComponent;
