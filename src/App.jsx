import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { PrivateRoutes } from "./utils/PrivateRoutes";
import { Home } from "./components/home/Home";
import { Auth } from "./components/auth/Auth";
import { ForgotPassword } from "./components/forgotPassword/ForgotPassword";
import { SignIn } from "./components/authorization/SignIn";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      return newMode;
    });
  };

  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : '';

  return (
    <div className="w-screen h-screen bg-gray-50">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} exact path="/home" ></Route>
          </Route>
          <Route exact path="/" element={<Auth themeClass={themeClass} isDarkMode={isDarkMode} />}></Route>
          <Route exact path="/verify" element={<SignIn />}></Route>
          <Route exact path="/reset-password" element={<ForgotPassword />}></Route>
        </Routes>
        <div className="absolute top-5 right-5 cursor-pointer" onClick={toggleDarkMode}>
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </div>
      </Router>
    </div>
  )
}

export default App
