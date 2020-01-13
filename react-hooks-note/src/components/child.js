import React, { useEffect } from 'react';

let renderCount = 0;

const Child = () => {
  useEffect(() => {
    renderCount++;
  });

  return <div>render count: {renderCount}</div>;
};

export default Child;
