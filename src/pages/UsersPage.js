import {useNavigate} from "react-router-dom";

const UsersPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>UsersPage</h1>
            <button onClick={()=>navigate('/posts?id=5&name=max')}>toPostsPage</button>
        </div>
    );
};

export {UsersPage};