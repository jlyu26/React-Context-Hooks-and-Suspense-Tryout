import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

const LoginContextProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <LoginContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
