import React from "react";
import { TranslateButton  } from "../components/translationPage/TranslateButton";
import { InputField } from "../components/translationPage/InputField";
import { OutputField } from "../components/translationPage/OutputField";
import { Link } from "react-router-dom";


function TranslationPage() {

  return (
    <div>
      <h1>Translation Page</h1>
      <InputField />
      <TranslateButton />
      <OutputField />
      <Link to="/profile">
        <button type="button" class="btn btn-success">
          Profile
        </button>
      </Link>
    </div>
  );
}

export default TranslationPage;