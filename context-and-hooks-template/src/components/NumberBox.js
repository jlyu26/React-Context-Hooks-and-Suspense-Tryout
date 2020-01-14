import React, { useState } from 'react';

const NumberBox = props => {
  const [number, setNumber] = useState(0);
  const onClickHandle = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <div>Number: {number}</div>
      <button onClick={onClickHandle}>Increase Number</button>
    </>
  );
};

export default NumberBox;
