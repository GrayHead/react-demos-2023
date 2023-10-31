import {createContext} from "react";
import {A} from "./components/A";

const Context = createContext(null)
const App = () => {
    return (
        <div>
            <Context.Provider value={'Hello'}>
                <A/>
            </Context.Provider>
        </div>
    );
};

export {
    App,
    Context
};