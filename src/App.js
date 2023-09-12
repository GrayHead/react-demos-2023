import './App.css';
import {useEffect} from "react";
import {getAllUsers, getUserById} from "./services/user.api.service";

function App() {


    useEffect(() => {
        getAllUsers().then(value => console.log(value.data));

        getUserById(9).then(value => console.log(value.data))
    }, []);

    return (
        <div className="App">

        </div>
    );
}

export default App;





