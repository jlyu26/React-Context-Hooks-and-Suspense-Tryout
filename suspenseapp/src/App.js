import React, { Suspense } from 'react';
import { createResource } from './PersonApi';
import Person from './Person';
import Num from './Num';

// will fire the API call
const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading num...</div>}>
        <Num resource={resource} />
      </Suspense>
      <Suspense fallback={<div>loading person...</div>}>
        <Person resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
