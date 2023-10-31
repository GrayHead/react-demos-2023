import {useAppContext} from "../hooks/useAppContext";

const D = () => {
    const message = useAppContext()
    return (
        <div>
            <div>D: {message}</div>
        </div>
    );
};

export {D};