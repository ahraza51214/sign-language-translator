import React from "react";
import { TranslateButton  } from "../components/translationPage/TranslateButton";
import { InputField } from "../components/translationPage/InputField";
import { OutputField } from "../components/translationPage/OutputField";
import { Link } from "react-router-dom";


function TranslationPage() {

  return (
    <div>
      <br />
      <h1>Translation Page</h1>
      <br />
      <InputField />
      <br />
      <TranslateButton />
      <br />
      <br />
      <OutputField />
      <br />
      <Link to="/profile">
        <button type="button" className="btn btn-success">
          Profile
        </button>
      </Link>
    </div>
  );
}

export default TranslationPage;