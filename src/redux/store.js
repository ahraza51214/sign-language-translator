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
/*
const store = configureStore({
    reducer: {
        user: userReducer,
        translation: translationReducer
    },
    devTools: true    
});
*/
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = configureStore({
    reducer: {
        user: userReducer,
        translation: translationReducer
    },
    //Implement a Redux logger middleware. This will log every 
    //action that gets dispatched and the subsequent state changes, 
    //making it easier for debug issues.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true    
});

export default store;
