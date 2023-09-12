import React from 'react';
import {useNavigate} from "react-router-dom";

const PostComponent = ({item}) => {
    const navigate = useNavigate();
    return (
        <div>
            {item.id}-{item.title}
            <button onClick={() => {
                navigate('/posts/details', {state: item});
            }}>details
            </button>

        </div>
    );
};

export default PostComponent;
