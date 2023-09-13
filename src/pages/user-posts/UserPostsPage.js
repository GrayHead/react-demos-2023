import React, {useEffect} from 'react';
import {useLoaderData, useParams} from "react-router-dom";

const UserPostsPage = () => {

    // const {id} = useParams();
    //
    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    //         .then(value => value.json())
    //         .then(value => {
    //             console.log(value);
    //         });
    //
    // }, [id]); // 1->2->3

    const posts = useLoaderData();


    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)

            }
        </div>
    );
};

export default UserPostsPage;
