// src/TranslationPage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTranslation,
  clearTranslations,
} from "../../../redux/slices/translationSlice"; // Import your Redux actions
import { mapCharactersToImages } from "../../../signLanguageMapping"; // Import your mapping function

function Translation() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  const handleTranslate = () => {
    // Translate the input text to sign language (using the mapping function)
    const signLanguageImages = mapCharactersToImages(inputText);

    // Dispatch the translation to Redux
    dispatch(addTranslation(signLanguageImages.join(" "))); // Join images into a string for storage

    // Clear the input field
    setInputText("");
  };

  const handleClear = () => {
    // Clear translations in Redux
    dispatch(clearTranslations());
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
        {inputText &&
          mapCharactersToImages(inputText).map((imagePath, index) => (
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