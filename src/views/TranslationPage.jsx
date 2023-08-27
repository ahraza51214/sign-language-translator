import React from "react";
import { TranslateButton  } from "../components/translationPage/TranslateButton";
import { InputField } from "../components/translationPage/InputField";
import { OutputField } from "../components/translationPage/OutputField";

function TranslationPage() {

  return (
    <div>
      <h1>Translation Page</h1>
      <InputField />
      <TranslateButton />
      <OutputField />
    </div>
  );
}

export default TranslationPage;