import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Components/Home/Home';
import Profile from './Components/Home/Profile/Profile';
import TranslationPage from './Components/Home/Translate/TranslationPage';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/profile/:username" element={<Profile />} />
                  <Route path="/translate/:username" element={<TranslationPage />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}




export default App;