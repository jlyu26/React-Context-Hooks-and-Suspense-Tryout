import React, { useState } from 'react';
import InfoTag from './components/infoTag';

const initialProfile = {
  name: 'john',
  age: 30,
  address: 'New York, NY',
  married: true
};

function App() {
  const [profile, setProfile] = useState(initialProfile);

  const removeItemHandle = e => {
    console.log(e.target.name);

    const profileCopy = { ...initialProfile };
    delete profileCopy[e.target.name];
    setProfile(profileCopy);
  };

  return Object.entries(profile).map((item, index) => {
    return (
      <InfoTag key={`${index}.${item[0]}.${item[1]}`} {...{ item }} onClick={removeItemHandle} />
    );
  });
}

export default App;
