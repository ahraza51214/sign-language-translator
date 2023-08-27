import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import {handleTranslate} from '../../Components/TranslationPage'

const API_URL = process.env.REACT_APP_API_URL; // Retrieve API_URL from .env
const API_KEY = process.env.REACT_APP_API_KEY; // Retrieve API_KEY from .env

// This is the initial state of the translation slice.
export const updateTranslationApiEndpoint = createAsyncThunk(
  'transLation/update',
    async ({ userId, translations }) => {
      //Printing out the console the data being sent to the API.
      //This is to help with debugging.
      console.log(`Making API call to: ${API_URL}/${userId} with data:`, {
        translations: translations
      });
      
      //try{
        const response = await fetch(`${API_URL}/${userId}`, {

          method: 'PATCH',
          headers: {
            'X-API-Key': API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            translations: translations
          })
        });
    
        if (!response.ok) {
          throw new Error('Translation update failed');
        }
        return await response.json();
      //}
      //atch{
        //console.log('Translation update failed');
      //}
    }
  );
  





export const translationSlice = createSlice({
  name: 'translations',
  initialState: [],
  reducers: {
    /*
    addTranslation: (state, action) => {
      state.push(action.payload);
      //state.translations = action.payload;
    },*/
    clearTranslations: (state) => {
      state.length = 0;
    },
  },
  extraReducers: (builder) => {
    //This reducer is updating the translations state by 
    //pushing the latest translations received from the API.
    builder.addCase(updateTranslationApiEndpoint.fulfilled, (state, action) => {
      // Because the API responds with the updated user data including translations.
      // If the API only responds with the latest translation or a success message, adjust accordingly.
      state.push(action.payload.translations);
    })  
  }
});

export const { addTranslation, clearTranslations } = translationSlice.actions;
export default translationSlice.reducer;
