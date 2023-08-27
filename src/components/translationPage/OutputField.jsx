import React from "react";
import { useSelector } from "react-redux";

export const OutputField = () => {
  const translatedImages = useSelector((state) => state.user.translatedImages);

  return (
    <div>
      <h2>Translated Sign Language</h2>
      {translatedImages.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Character ${index}`} />
      ))}
    </div>
  );
};