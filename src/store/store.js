import {configureStore} from "@reduxjs/toolkit";

import {carReducer, userReducer} from "./slices";

const store = configureStore({
    reducer: {
        user: userReducer,
        car: carReducer
    }
});

export {store}