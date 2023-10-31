import {D} from "./D";
import {useContext} from "react";
import {Context} from "../App";

const C = () => {
    const message = useContext(Context)
    return (
        <div>
            <div>C: {message}</div>
            <D/>
        </div>
    );
};

export {C};