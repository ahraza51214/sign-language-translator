import React from "react";
import { TranslationHistory } from "../components/profilePage/TranslationHistory";
import { ClearHistoryButton } from "../components/profilePage/ClearHistoryButton";
import { LougoutButton } from "../components/profilePage/LogoutButton";

function ProfilePage() {

  return (
    <div>
      <p>Profile Page</p>
      <p>Search History:</p>
      <TranslationHistory />
      <ClearHistoryButton />
      <LougoutButton />
    </div>
  );
};

export default ProfilePage;