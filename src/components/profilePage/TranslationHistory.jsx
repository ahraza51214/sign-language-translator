import { useSelector } from "react-redux";

export const TranslationHistory = () => {
  const user = useSelector((state) => state.user);
  const translations = useSelector((state) => state.user.translations);

  // Getting user's last 10 translations in a const displayTranslationHistory
  const displayTranslationHistory = translations.slice(-10)

  return (
    <div>
      <h2>Translation History for user {user.username}</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {user.translations.length !== 0 ? (
          displayTranslationHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <p>Translation history is empty.</p>
        )}
      </ul>
    </div>
  );
};