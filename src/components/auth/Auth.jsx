import { useState } from "react";

import { SignIn } from "../authorization/SignIn";
import { SignUp } from "../register/SignUp";

export const Auth = ({ themeClass, isDarkMode }) => {
  const [isAuth, setIsAuth] = useState(true);

  const toggleAuth = () => {
    setIsAuth(prevIsAuth => !prevIsAuth);
  };

  return (
    <>
      {isAuth ? (
        <SignIn closeSignIn={toggleAuth} themeClass={themeClass} isDarkMode={isDarkMode} />
      ) : (
        <SignUp closeSignUp={toggleAuth} themeClass={themeClass} isDarkMode={isDarkMode}/>
      )}
    </>
  );
};
