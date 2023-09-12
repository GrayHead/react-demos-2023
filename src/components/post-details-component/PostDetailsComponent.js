import React from 'react';

const PostDetailsComponent = ({item}) => {
    return (
        <div>
            {
                JSON.stringify(item)
            }

        </div>
    );
};

export default PostDetailsComponent;
