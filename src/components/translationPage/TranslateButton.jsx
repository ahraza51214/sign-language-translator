// TranslateButton.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTranslatedImages, addTranslationToState, addTranslationToAPI } from "../../redux/slices/userSlice";
import { mapCharactersToImages } from "../../signLanguageMapping";

export const TranslateButton = () => {
  const dispatch = useDispatch();
  const translationInputText = useSelector(
    (state) => state.user.translationInputText
  );

  const handleTranslateClick = () => {
    const signLanguageImages = mapCharactersToImages(translationInputText);
    dispatch(setTranslatedImages(signLanguageImages));
    dispatch(addTranslationToState(signLanguageImages.join(" ")));
    dispatch(addTranslationToAPI(signLanguageImages.join(" ")));
  };

  return <button type="button" class="btn btn-primary" onClick={handleTranslateClick}>Translate</button>;
};