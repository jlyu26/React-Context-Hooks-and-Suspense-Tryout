import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const LoginBox = props => {
  const { loggedIn, toggleLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    console.log('login toggled: ', loggedIn);
  }, [loggedIn]);

  return (
    <>
      <div>Logged in: {loggedIn.toString()}</div>
      <button onClick={toggleLoggedIn}>Toggle Login</button>
    </>
  );
};

export default LoginBox;
