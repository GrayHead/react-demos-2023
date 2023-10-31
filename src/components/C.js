import {MyContext} from "../App";

const C = ({drill}) => {
    return (
        <div>
            C component
            <div>{drill}</div>
            <MyContext.Consumer>
                {
                    (value) => {
                        return <h1>{value}</h1>
                    }
                }
            </MyContext.Consumer>
        </div>
    );
};

export {C};