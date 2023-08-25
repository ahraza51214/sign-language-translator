// translationSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const translationSlice = createSlice({
  name: 'translations',
  initialState: [],
  reducers: {
    addTranslation: (state, action) => {
      state.push(action.payload);
    },
    clearTranslations: (state) => {
      state.length = 0;
    },
  },
});

export const { addTranslation, clearTranslations } = translationSlice.actions;
export default translationSlice.reducer;
