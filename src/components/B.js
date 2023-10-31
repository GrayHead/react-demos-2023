import {C} from "./C";
import {useAppContext} from "../hooks/useAppContext";

const B = () => {
    const message = useAppContext()
    return (
        <div>
            <div>B: {message}</div>
            <C/>
        </div>
    );
};

export {B};