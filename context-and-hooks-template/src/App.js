import React from 'react';
import LoginContextProvider from './contexts/LoginContext';
import LoginBox from './components/LoginBox';
import NumberBox from './components/NumberBox';

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        <LoginBox />
        <NumberBox />
      </LoginContextProvider>
    </div>
  );
}

export default App;
