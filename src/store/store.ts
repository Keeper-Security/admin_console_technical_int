import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice";

const store = configureStore({ 
    reducer: { 
        users: userReducer,
    }
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default store;