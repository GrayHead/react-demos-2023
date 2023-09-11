import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/first-component/FirstComponent";

function App() {
    return (
        <div className="App">
            <FirstComponent
                txt={'homer'}
                image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
            />

            <FirstComponent
                txt={'bart'}
                image={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />

        </div>
    );
}

export default App;





