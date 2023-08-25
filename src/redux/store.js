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
import translationReducer from './slices/translationSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        translation: translationReducer
    },
    devTools: true    
});

export default store;
