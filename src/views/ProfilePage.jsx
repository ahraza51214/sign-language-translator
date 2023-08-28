import React from "react";
import { TranslationHistory } from "../components/profilePage/TranslationHistory";
import { ClearHistoryButton } from "../components/profilePage/ClearHistoryButton";
import { LogoutButton } from "../components/profilePage/LogoutButton"
import { Link } from "react-router-dom";


function ProfilePage() {

  return (
    <div>
      <br />
      <h1>Profile Page</h1>
      <TranslationHistory />
      <ClearHistoryButton />
      <br />
      <br />
      <Link to="/translate">
        <button type="button" className="btn btn-success">
          Translate
        </button>
      </Link>
      <br />
      <br />
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;