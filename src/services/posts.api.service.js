const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const getAllPosts = () => {
    return fetch(baseUrl)
        .then(value => value.json())

}

export {getAllPosts}

