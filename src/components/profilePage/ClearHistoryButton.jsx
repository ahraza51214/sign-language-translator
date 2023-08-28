import React from "react";
import { useDispatch } from "react-redux";
import { clearTranslationHistory } from "../../redux/slices/userSlice";


export const ClearHistoryButton = () => {
  const dispatch = useDispatch();

  // dispatches the clearTranslationHistory action
  const handleOnClick = () => {
    dispatch(clearTranslationHistory());
  };

  return (
    <button className="btn btn-warning clear-btn" onClick={handleOnClick}>
      Clear
    </button>
  );
};
