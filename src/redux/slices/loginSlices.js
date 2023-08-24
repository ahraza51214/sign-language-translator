// importing createSlice and createAsyncThunk from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createHeaders } from './index';

// Declearing the apiUrl
const apiUrl = process.env.REACT_APP_API_URL;

// Creating the checkForUser function
export const loginUser = createAsyncThunk(
  'user/loginUser',
  // The function that will be called to get the data
  async (username, thunkAPI) => {
    // The try/catch block will handle any errors that may occur
    // In this case, we will handle an error if the user does not exist
    // If the user does exist, we will return the user's data
    // If the user does not exist, we will prompt the user to create a new user
    // If the user does not create a new user, we will return null
    // If the user creates a new user, we will return the new user's data
    try {
      const response = await fetch(`${apiUrl}?username=${username}`);
      
      // If the response is not ok, throw an error
      if (!response.ok) {
          throw new Error('Could not complete request');
      }

      // If the response is ok, return the data
      const data = await response.json();

      // If the result is an empty array, return null
      if (Array.isArray(data) && data.length === 0) {
          let newusername = prompt("The user does not exist. Please create a new user");
          if (newusername) {
              const newUserResponse = await fetch(apiUrl, {
                  method: 'POST',
                  headers: createHeaders(),
                  body: JSON.stringify({ username: newusername })
              });

              if (!newUserResponse.ok) {
                  throw new Error('Could not create user with username ' + newusername);
              }

              return await newUserResponse.json();
          }
          return null;
      }
      return data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default userSlice.reducer;
