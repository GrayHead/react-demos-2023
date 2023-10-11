import {useSelector} from "react-redux";

const Users = () => {
    const {users} = useSelector(state => state.user);

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {Users};