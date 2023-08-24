/*
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    },
    devTools: true,    
})
*/


import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/loginSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    },
    devTools: true    
});

export default store;
