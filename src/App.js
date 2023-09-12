import './App.css';
import {useEffect, useState} from "react";
import UsersComponent from "./users/UsersComponent";

function App() {

    const [user, setUser] = useState(null);
    const choseUser = (obj) => {
        setUser(obj);

    }

    return (
        <div className="App">


            <h2>{user?.email}</h2>
            {
                user && <h2>{user.email}</h2>
            }
            <hr/>
            <h2>users component start</h2>
            <UsersComponent choseUser={choseUser}/>
            <h2>users component end</h2>
            <hr/>
        </div>
    );
}

export default App;





