import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTranslation,
  clearTranslations,
} from "../../../redux/slices/translationSlice";
import { mapCharactersToImages } from "../../../signLanguageMapping";

function Translation() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [translatedImages, setTranslatedImages] = useState([]); // New state variable

  const handleTranslate = () => {
    // Translate the input text to sign language
    const signLanguageImages = mapCharactersToImages(inputText);

    // Update the translatedImages state
    setTranslatedImages(signLanguageImages);

    // Dispatch the translation to Redux
    dispatch(addTranslation(signLanguageImages.join(" ")));

    // Clear the input field
    setInputText("");
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
