import React, { useState } from 'react';
import InfoTag from './components/infoTag';
import useProfile from './hooks/useProfile';

const initialProfile = {
  name: 'john',
  age: 30,
  address: 'New York, NY',
  married: true
};

function App() {
  const { profile, removeItem } = useProfile(initialProfile);
  const removeItemHandle = e => {
    removeItem(e.target.name);
  };

  return Object.entries(profile).map((item, index) => {
    return (
      <InfoTag key={`${index}.${item[0]}.${item[1]}`} {...{ item }} onClick={removeItemHandle} />
    );
  });
}

export default App;
