import { useSelector } from "react-redux";

export const TranslationHistory = () => {
  const user = useSelector((state) => state.user);
  const translations = useSelector((state) => state.user.translations);

  // Getting user's last 10 translations in a const displayTranslationHistory
  const displayTranslationHistory = translations.slice(-10)

  return (
    <div>
      <h1>Translation History</h1>
      <ul>
        {user.translations.length !== 0 ? (
          displayTranslationHistory.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p> Translation histoy is empty. </p>
        )}
      </ul>
    </div>
  );
};