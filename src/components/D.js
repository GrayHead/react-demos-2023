import {useContext} from "react";
import {Context} from "../App";

const D = () => {
    const message = useContext(Context)
    return (
        <div>
            <div>D: {message}</div>
        </div>
    );
};

export {D};