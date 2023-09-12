import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetailsPage = () => {
    const {state} = useLocation();

    return (
        <div>
            {state.name} - {state.email}
        </div>
    );
};

export default UserDetailsPage;
