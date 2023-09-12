import React from 'react';

const UserDetailsComponent = ({item}) => {
    return (
        <div>
            {item.name} - {item.email}
        </div>
    );
};

export default UserDetailsComponent;
