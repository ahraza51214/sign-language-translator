// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = process.env.REACT_APP_API_URL; // Retrieve API_URL from .env
const API_KEY = process.env.REACT_APP_API_KEY; // Retrieve API_KEY from .env

// Function to perform login
async function performLogin(username) {
  const loginResponse = await fetch(`${API_URL}`, {
    method: 'GET', // Use GET method for login
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${API_KEY}`,
    }
});

if (!loginResponse.ok) {
    throw new Error('Login failed');
  }

  // Assuming the server responds with a success status
  const user = { username };
  return user;
}

// Function to create a new user
async function createUser(username) {
    
    const createUserResponse = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${API_KEY}`,
          },
        body: JSON.stringify({ 
            
            username: username,
            translations: []
        })
    });

    if (!createUserResponse.ok) {
        throw new Error('User creation failed');
    }

    // User created successfully
    //return username;
    return await createUserResponse.json();
}

const loginSuccess = (username) => ({
    type: 'user/loginSuccess',
    payload: username,
});

// Async thunk for login
export const loginUser = createAsyncThunk('user/login', 
    async (username, { dispatch }) => {
        try {
            // Check if the user exists by making a GET request to the 'users' endpoint
            const checkUserResponse = await fetch(`${API_URL}?username=${username}`);
            const userFromAPI = await checkUserResponse.json();

        //if (checkUserResponse.ok && userFromAPI && userFromAPI.username) {
        if (checkUserResponse.ok && Array.isArray(userFromAPI) && userFromAPI.length !== 0){
            // User exists, perform login using GET
            const user = await performLogin(username);

            // Dispatch the loginSuccess action with the username
            dispatch(loginSuccess(username));
            return user;
        } else {
            // User does not exist, create a new user and then perform login
            const newUser = await createUser(username);
            //const user = await performLogin(username);

            // Dispatch the loginSuccess action with the username
            dispatch(loginSuccess(username));

            return newUser;
        }

        } catch (error) {
            throw error;
        }
    }
);

// Async thunk for logout (if needed)
export const logoutUser = createAsyncThunk('user/logout', async () => {
    /*try {
        // Perform any necessary logout actions, e.g., sending a request to invalidate the session
        // ...

        return null; // Return null to indicate a successful logout
    } catch (error) {
        throw error;
    }*/
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        username: ''
    },
    reducers: {
        // You can add other synchronous reducers here if needed
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
        })
        .addCase(loginUser.rejected, (state, action) => {
            // Handle login error, e.g., set an error state
            console.error('Error logging in:', action.error.message);
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.isAuthenticated = false;
            state.username = '';
        })
        .addCase(logoutUser.rejected, (state, action) => {
            // Handle logout error, if needed
            console.error('Error logging out:', action.error.message);
        });
    }
});

export default userSlice.reducer;
