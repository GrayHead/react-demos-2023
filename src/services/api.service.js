const getAllusers = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    return users;

}


const getPostsOfUserById = async ({params: {id}}) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json());
    return posts

}

export {getAllusers, getPostsOfUserById}
