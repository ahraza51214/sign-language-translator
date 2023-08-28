import React from "react";
import { TranslationHistory } from "../components/profilePage/TranslationHistory";
import { ClearHistoryButton } from "../components/profilePage/ClearHistoryButton";
import { LougoutButton } from "../components/profilePage/LogoutButton"
import { Link } from "react-router-dom";


function ProfilePage() {

  return (
    <div>
      <h1>Profile Page</h1>
      <TranslationHistory />
      <ClearHistoryButton />
      <LougoutButton />
      <Link to="/translate">
        <button type="button" className="btn btn-success">
          Translate
        </button>
      </Link>
    </div>
  );
};

export default ProfilePage;