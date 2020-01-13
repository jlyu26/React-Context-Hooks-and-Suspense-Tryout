import React, { useState, useEffect } from 'react';

function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  // only called when initialize
  useEffect(() => {
    console.log('component mounted');
  }, []);

  // run after every completed render, including initial and update
  useEffect(() => {
    if (growth >= 100) {
      setNirvana(true);
    }
    console.log('component updated');
  });

  // only called when `nirvana` updated
  useEffect(() => {
    console.log('component should unmount');
  }, [nirvana]);

  function growHandle() {
    if (nirvana) {
      return;
    }
    setGrowth(growth + 10);
  }
  return (
    <div className="App">
      <div>{growth}</div>
      <button onClick={growHandle}>Grow</button>
    </div>
  );
}

export default App;
