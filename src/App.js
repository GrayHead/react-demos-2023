import './App.css';
import {useState} from "react";

function App() {


    let [counter, setCounter] = useState(0);

    const onClickIncrement = () => {
        counter++;
        setCounter(counter);
    };
    const onClickDecrement = () => {
        counter--;
        setCounter(counter);
    };
    return (
        <div className="App">

            <h1>counter: {counter} </h1>
            <button onClick={onClickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>


        </div>
    );
}

export default App;





