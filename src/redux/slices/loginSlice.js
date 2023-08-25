// importing createSlice and createAsyncThunk from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {loginUser} from '../../Components/Home/Login/LoginFormAPI'; 






// Thunk for login user:
// The function below is called a thunk and allows us to perform async logic. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests accoding to the documentation from the website. 
export const loginUserAsync = createAsyncThunk(
    'user/loginUser',
    async (username, { rejectWithValue }) => {
        try {
            const [error, user] = await loginUser(username);
            if (error) {
                throw error;
            }
            return user;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// Initial state
const initialState = {
    user: null,
    isLoading: false,
    error: null
};

// User slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {/*
        logoutUser: (state) => {
            state.user = null;
            state.isLoading = false;
            state.error = null;
        }*/
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUserAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.error = action.payload;
            });
    }
});

export default userSlice.reducer;
