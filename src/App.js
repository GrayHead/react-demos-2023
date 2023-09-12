import './App.css';
import {useState} from "react";

function App() {


    let [counter, setCounter] = useState({value: 0});

    const onClickIncrement = () => {
        counter.value++;
        setCounter({...counter});

    };
    const onClickDecrement = () => {
        counter.value--;
        setCounter({...counter});
    };
    return (
        <div className="App">

            <h1>counter: {counter.value} </h1>
            <button onClick={onClickIncrement}>+</button>
            <button onClick={onClickDecrement}>-</button>


        </div>
    );
}

export default App;





