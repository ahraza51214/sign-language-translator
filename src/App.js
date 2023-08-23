import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Views/Login';
import Profile from './Views/Profile';
import Translate from './Views/Translate';

function App() {

  //console.log(process.env.REACT_APP_API_KEY)

  return (
    <BrowserRouter>
     <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/translate" element={<Translate />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;