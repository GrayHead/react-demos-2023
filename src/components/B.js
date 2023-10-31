import {C} from "./C";
import {useContext} from "react";
import {Context} from "../App";

const B = () => {
    const message = useContext(Context)
    return (
        <div>
            <div>B: {message}</div>
            <C/>
        </div>
    );
};

export {B};