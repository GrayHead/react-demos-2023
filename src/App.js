import logo from './logo.svg';
import './App.css';
import {products} from "./data/data";
import ProductComponent from "./components/product/ProductComponent";


function App() {

    return (
        <div className="App">
            {
                products.map((product,index) => (
                    <ProductComponent item={product} key={index}/>
                ))
            }
        </div>
    );
}

export default App;





