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

  const userID = useSelector((state) => state.user.id);
  let current_translation = useSelector((state) => state.user.translations);

  const handleTranslateClick = () => {
    const signLanguageImages = mapCharactersToImages(translationInputText);
    dispatch(setTranslatedImages(signLanguageImages));
    dispatch(addTranslationToState([...current_translation, translationInputText]));
    dispatch(addTranslationToAPI({id: userID, translations: [...current_translation, translationInputText],
      })
    );
  };

  return <button type="button" className="btn btn-primary" onClick={handleTranslateClick}>Translate</button>;
};