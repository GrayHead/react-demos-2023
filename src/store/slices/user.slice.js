import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: [
        {id: 1, name: 'Vasia'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Ira'},
    ]
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {}
});
const {reducer: userReducer} = userSlice;

export {
    userReducer
}