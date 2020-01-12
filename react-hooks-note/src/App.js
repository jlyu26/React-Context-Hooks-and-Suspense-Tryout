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

// Higher Order Component:
// takes a component as parameter, returns another component
const makeYellow = BaseComponent => props => {
  const addYellow = {
    style: {
      color: 'yellow'
    }
  };

  const newProps = { ...props, ...addYellow };

  return <BaseComponent {...newProps} />;
};

const YellowNameTag = makeYellow(NameTag);

function App() {
  return (
    <div className="App">
      <YellowNameTag style={nameStyle}>Peter</YellowNameTag>
      <NameTag style={{ ...nameStyle, ...additionStyle }} name="Tom" />
    </div>
  );
}

export default App;
