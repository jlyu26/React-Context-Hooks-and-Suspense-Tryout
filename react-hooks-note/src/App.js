import React, { useState } from 'react';
import usePrevious from './hooks/usePrevious';
// Combine useState and useMemo to remember previous state
function App() {
  const [age, setAge] = useState(21);
  const previousAge = usePrevious(age);

  const onClickHandle = () => {
    setAge(age - 1);
  };
  return (
    <div className="App">
      <div>current age: {age}</div>
      <div>previous age: {previousAge}</div>
      <button onClick={onClickHandle}>make younger</button>
    </div>
  );
}

export default App;
