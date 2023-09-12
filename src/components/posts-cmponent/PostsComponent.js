import React, {useEffect, useState} from 'react';
import PostComponent from "../post-component/PostComponent";
import {getAllPosts} from "../../services/posts.api.service";

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then(value => setPosts(value));
    }, []);

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)

            }

        </div>
    );
};

export default PostsComponent;
