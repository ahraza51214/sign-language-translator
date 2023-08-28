// InputField.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTranslationInputText } from "../../redux/slices/userSlice";

export const InputField = () => {
  const dispatch = useDispatch();
  const translationInputText = useSelector(
    (state) => state.user.translationInputText
  );

  const handleInputChange = (event) => {
    dispatch(setTranslationInputText(event.target.value));
  };

  return (
    <textarea
      rows="5"
      cols="40"
      placeholder="Enter text to translate"
      value={translationInputText}
      onChange={handleInputChange}
    ></textarea>
  );
};