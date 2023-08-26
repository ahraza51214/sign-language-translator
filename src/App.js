import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Components/Home';
import ProfilePage from './Components/ProfilePage';
import TranslationPage from './Components/TranslationPage';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/profile/:username" element={<ProfilePage />} />
                  <Route path="/translate/:username" element={<TranslationPage />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}




export default App;