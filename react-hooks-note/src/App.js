import React from 'react';
import NameTag from './components/nameTag';

// styling in JSX: JavaScript Objects with camel attributes
const nameStyle = {
  color: 'red',
  border: '1px solid gray',
  paddingTop: '2px'
};

const additionStyle = {
  color: 'green'
};

function App() {
  return (
    <div className="App">
      <NameTag style={nameStyle}>Peter</NameTag>
      <NameTag style={{ ...nameStyle, ...additionStyle }} name="Tom" />
    </div>
  );
}

export default App;
