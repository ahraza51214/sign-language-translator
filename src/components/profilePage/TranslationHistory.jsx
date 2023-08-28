import { useSelector } from "react-redux";

export const TranslationHistory = () => {
  const user = useSelector((state) => state.user);
  
  console.log(user.translations);
  
  return (
    <div>
      <h1>Translation History</h1>
      <ul>
        {user.translations.length !== 0 ? (
          user.translations.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <p> Translation histoy is empty. </p>
        )}
      </ul>
    </div>
  );
};