import {B} from "./B";

const A = ({drill}) => {
    return (
        <div>
            a component
            <B drill={drill}/>
        </div>
    );
};

export {A};