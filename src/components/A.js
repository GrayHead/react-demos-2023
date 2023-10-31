import {B} from "./B";
import {useContext} from "react";
import {Context} from "../App";

const A = () => {
    const message = useContext(Context)
    return (
        <div>
            <div>A: {message}</div>
            <B/>
        </div>
    );
};

export {A};