import {useSearchParams} from "react-router-dom";

const PostsPage = () => {
    const [query, setQuery] = useSearchParams();

    const inc = () => {
        setQuery(prev => {
            prev.set('id', `${+prev.get('id') + 1}`)
            return prev
        })
    }
    return (
        <div>
            <h1>PostsPage</h1>
            <div>id: {query.get('id')}</div>
            <div>name: {query.get('name')}</div>
            <button onClick={inc}>incId</button>
        </div>
    );
};

export {PostsPage};