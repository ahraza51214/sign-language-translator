import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Views/Home';
import Profile from './Views/Profile';
import Translate from './Views/Translate';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/translate/:username" element={<Translate />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}




export default App;