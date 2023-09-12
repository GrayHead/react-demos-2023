const baseUrl = 'https://jsonplaceholder.typicode.com/users';
const getAllUsers = () => {
    return fetch(baseUrl)
        .then(value => value.json())

}

export {getAllUsers}
