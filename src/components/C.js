import {D} from "./D";
import {useAppContext} from "../hooks/useAppContext";

const C = () => {
    const message = useAppContext()
    return (
        <div>
            <div>C: {message}</div>
            <D/>
        </div>
    );
};

export {C};