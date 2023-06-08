import { useState } from "react";

import { SignIn } from "../authorization/SignIn";
import { SignUp } from "../register/SignUp";

export const Auth = () => {
  const [isAuth, setIsAuth] = useState(true);

  const toggleAuth = () => {
    setIsAuth(prevIsAuth => !prevIsAuth);
  };

  return (
    <>
      {isAuth ? (
        <SignIn closeSignIn={toggleAuth} />
      ) : (
        <SignUp closeSignUp={toggleAuth} />
      )}
    </>
  );
};
