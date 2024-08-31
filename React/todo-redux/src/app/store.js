import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice" ;


// Create a Redux store instance
//configureStore takes an object as input and returns a store instance
export const store = configureStore({
    reducer: {
        todo: todoReducer,
       
    },
});
