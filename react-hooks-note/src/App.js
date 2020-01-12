import React from 'react';

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
      <div style={nameStyle}>Peter</div>
      <div style={{ ...nameStyle, ...additionStyle }}>Tom</div>
    </div>
  );
}

export default App;
