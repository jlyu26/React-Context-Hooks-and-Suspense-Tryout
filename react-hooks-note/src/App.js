import React, { useState, useMemo } from 'react';
import Child from '../src/components/child';

// useMemo: if data not changed, don't re-render - save some life-cycles
function App() {
  const [i, setI] = useState(0);

  const onClickHandle = () => {
    setI(i + 1);
  };

  // Only update Child component when i updated:
  const memoChild = useMemo(() => {
    return <Child />;
  }, [i]);

  return (
    <div className="App">
      <div>i: {i}</div>
      <button onClick={onClickHandle}>Increase i</button>
      {memoChild}
    </div>
  );
}

export default App;
