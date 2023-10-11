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
    reducers: {
        addUser:(state, action)=>{
            const user = action.payload.user;
            state.users.push(user)
        }
    }
});
const {reducer: userReducer, actions:{addUser}} = userSlice;

export {
    userReducer,
    addUser
}