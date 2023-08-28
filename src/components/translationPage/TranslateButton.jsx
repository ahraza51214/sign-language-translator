// TranslateButton.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTranslatedImages, addTranslationToState, addTranslationToAPI, setLoginInputText, setTranslationInputText } from "../../redux/slices/userSlice";
import { mapCharactersToImages } from "../../signLanguageMapping";

export const TranslateButton = () => {
  const dispatch = useDispatch();
  const translationInputText = useSelector(
    (state) => state.user.translationInputText
  );

  const userID = useSelector((state) => state.user.id);
  let currentTranslation = useSelector((state) => state.user.translations);

  const handleTranslateClick = () => {
    const signLanguageImages = mapCharactersToImages(translationInputText);
    dispatch(setTranslatedImages(signLanguageImages));
    dispatch(addTranslationToState([...currentTranslation, translationInputText]));
    dispatch(addTranslationToAPI({id: userID,translations: [...currentTranslation, translationInputText],}));
  };

  return <button type="button" className="btn btn-primary" onClick={handleTranslateClick}>Translate</button>;
};