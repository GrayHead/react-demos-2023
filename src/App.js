import {A} from "./components/A";
import {createContext} from "react";

export const MyContext = createContext(null);
const App = () => {
    const drill = 'some info'
    return (
        <div>
            app component
            <MyContext.Provider value={'asdqwe'}>
                <A drill={drill}/>
            </MyContext.Provider>
        </div>
    );
};

export {App};