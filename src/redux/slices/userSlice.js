import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let API_URL = process.env.REACT_APP_API_URL;
let API_KEY = process.env.REACT_APP_API_KEY;


// User Actions
export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
   async (payload) => {
    return fetch(`${API_URL}/?username=${payload}`, {
      headers: {"x-api-key": API_KEY,
                "Content-Type": "application/json"}
    }
    ).then(response => { return response.json()})
     .catch(error => console.log(error));
  }
);

export const addUserToAPI = createAsyncThunk(
  "user/addUserToAPI",
  async (payload) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {"x-api-key": API_KEY, "Content-Type": 'application/json'},
      body: JSON.stringify(payload),
    }).then((response) => response)
      .then((json) => console.log(json))
      .catch(error => console.log(error))
  }
);


// Translation Actions
export const addTranslationToAPI = createAsyncThunk(
  "user/addTranslationToAPI",
  async (payload) => {
    console.log(payload)
    await fetch(`${API_URL}/${payload.id}`, {
      method: "PATCH",
      headers: {"x-api-key": API_KEY,
                "Content-Type": 'application/json'},
      body: JSON.stringify({
        "translations": payload.translations
      }),
    }).then((response) => response)
      .then((json) => console.log(json))
      .catch(error => console.log(error))
  }
);


// User Slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    username: "",
    translations: [],
    isAuthorized: false,
    loginInputText:"",
    translationInputText:"",
    translatedImages: [],
  },
  reducers: {
    // User
    login: (state, action) => {
    state.id = action.payload.id
    state.isAuthorized = true
    state.username = action.payload
    },
    logout: (state, action) => {
    state.id = 0
    state.isAuthorized = false;
    state.username = ""
    state.translations = []
    },
    setLoginInputText: (state, action) => {
      state.loginInputText = action.payload;
    },
    // Translation
    setTranslationInputText: (state, action) => {
      state.translationInputText = action.payload;
    },
    setTranslatedImages: (state, action) => {
      state.translatedImages = action.payload;
    },
    addTranslationToState: (state, action) => {
      state.isAuthorized = true
      state.translations = action.payload;
    },
    clearTranslationHistory: (state, action) => {
      state.isAuthorized = true
      state.translations = []
    },
  },
  extraReducers: {
    [getCurrentUser.fulfilled]: (state, action) => {
        console.log("check", action.payload.length !== 0)
            if (action.payload.length !== 0){
            state.id = action.payload[0].id
            state.username = action.payload[0].username
            state.translations = action.payload[0].translations
            state.isAuthorized = true
        }    
    },
    [addUserToAPI.fulfilled]: (state, action) => {
            state.username = action.payload
            state.translations = []
            state.isAuthorized = true
    },
    [addTranslationToAPI.fulfilled]: (state, action) => {}
  }
});

export const { login, logout, setLoginInputText, setTranslationInputText, setTranslatedImages, addTranslationToState, clearTranslationHistory } = userSlice.actions;
export const userReducer = userSlice.reducer;