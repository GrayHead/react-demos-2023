import logo from './logo.svg';
import './App.css';
import {createRef, useState} from "react";
import {useForm} from "react-hook-form";

function App() {
    let {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);

    }
    return (<div>


        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {required: true})}/>
            <input {...register("body")}/>
            <input type="submit" value={'save post'}/>
        </form>

    </div>);
}

export default App;





