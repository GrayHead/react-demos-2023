import {C} from "./C";

const B = ({drill}) => {
    return (
        <div>
            b component
            <C drill={drill}/>
        </div>
    );
};

export {B};