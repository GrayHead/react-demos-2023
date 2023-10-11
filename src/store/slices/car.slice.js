import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {id: 1, brand: 'BMW'},
        {id: 2, brand: 'AUDI'},
        {id: 3, brand: 'KIA'},
    ]
};

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {}
});

const {reducer: carReducer} = carSlice;

export {
    carReducer
}