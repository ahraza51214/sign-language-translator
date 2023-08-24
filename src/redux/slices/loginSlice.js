// importing createSlice and createAsyncThunk from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const apiKey = process.env.REACT_APP_API_KEY

export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}



const apiUrl = process.env.REACT_APP_API_URL;

// Definding the loginUser function.

// This function will check if the user exists in the database.
// If the user does not exsits, the function will return an empty array. 
async function checkForUser(username) {
    const response = await fetch(`${apiUrl}?username=${username}`);
    
    if (!response.ok) {
        throw new Error('Could not complete request');
    }
    
    const data = await response.json();

    // If the result is an empty array, return null
    if (Array.isArray(data) && data.length === 0) {
        return null;
    }
    
    return data;
}

// Defining the createUser function.
// This function will create a new user in the database.
export const createUser = async (username) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: createHeaders(),
        body: JSON.stringify({ username })
    });

    if (!response.ok) {
        throw new Error('Could not create user with username ' + username);
    }

    return await response.json();
}

export const loginUser = async (username) => {
    try {
        const users = await checkForUser(username);

        // If user is not found (i.e., checkForUser returned an empty array)
        // we want a dialog pop-up to ask the user "Do you want create a new user,
        // or do you want to login with a different user".
        if (!users || users.length === 0) {
/*            let response = confirm("The user does not exist. Do you want to create a new user?");

            if(!response){
                //return [null, null];
            }else if(response){}
*/
            let newusername = prompt("The user does not exist. Please create a new user");
            if(newusername === null){
                return null;//return [null, null];
            } else {
                const newUser = await createUser(newusername);
                return [null, { ...newUser, newUserCreated: true }];  // Add a flag to the returned user
            }
        }

        return [null, users[0]];
    } catch (error) {
        console.error(error.message);
        return [error, null];
    }
}







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
    reducers: {},
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
