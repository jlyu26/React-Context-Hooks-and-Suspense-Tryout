import { useState } from 'react';

function useProfile(init) {
  const [profile, setProfile] = useState(init);
  return {
    profile,
    removeItem(item) {
      const profileCopy = { ...profile };
      delete profileCopy[item];
      setProfile(profileCopy);
    }
  };
}

export default useProfile;
