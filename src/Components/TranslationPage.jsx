import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  //addTranslation,
  clearTranslations,
} from "../redux/slices/translationSlice";
import { mapCharactersToImages } from "../signLanguageMapping";

//Using the useSelector hook to access the Redux store of 
// the characters and translated characters, respectively.
// For exaample, get the logged-in user’s information
import { useSelector } from 'react-redux';


import { updateTranslationApiEndpoint } from "../redux/slices/translationSlice";

function Translation() {
  const userId = useSelector((state) => state.user.userId);  // Access the userId from the user slice
  console.log("User ID:", userId);
  const user = useSelector((state) => state.user);  // Because the user slice is named 'user' in the root reducer.
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [translatedImages, setTranslatedImages] = useState([]); // New state variable

  const handleTranslate = () => {
    // Translate the input text to sign language
    const signLanguageImages = mapCharactersToImages(inputText);

    // Update the translatedImages state
    setTranslatedImages(signLanguageImages);

    // Dispatch the translation to Redux
    //dispatch(addTranslation(signLanguageImages.join(" ")));

    // Clear the input field
    //setInputText("");
    // Update the API
    try {
      dispatch(updateTranslationApiEndpoint({ userId: userId, username: user.username, translations: [inputText] }));
      setInputText("");  // Clear the input after successful update.
  } catch (error) {
      // Handle the error. You can show a notification to the user here.
      console.error("Failed to update translation:", error);
  }








    // Because the endpoint requires the user's username and the translations
    //dispatch(updateTranslationApiEndpoint({ userId: userId, username: user.username, translations: [inputText] }));
    dispatch(updateTranslationApiEndpoint({ userId: userId, translations: [inputText] }));

  };

  const handleClear = () => {
    // Clear translations in Redux
    dispatch(clearTranslations());
    // Clear the translatedImages state
    setTranslatedImages([]);
  };

  return (
    <div>
      <h1>Translation Page</h1>
      <textarea
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button onClick={handleTranslate}>Translate</button>
      <button onClick={handleClear}>Clear Translations</button>
      <div>
        <h2>Translated Sign Language</h2>
        {translatedImages.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Character ${inputText.charAt(index)}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Translation;
