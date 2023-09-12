import React from 'react';

// dumb component
const UserComponent = ({item, choseUser}) => {
    return (
        <div>
            {item.id} {item.name}
            <button onClick={() => {
                choseUser(item);
            }}>detils
            </button>
        </div>
    );
};

export default UserComponent;
