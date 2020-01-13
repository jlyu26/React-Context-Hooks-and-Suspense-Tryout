import React, { useState, useEffect } from 'react';

// Feth data must be after component is loaded
// so we need useEffect to do that

const initProfile = {
  followers: null,
  public_repos: null
};

function App() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const response = await fetch('https://api.github.com/users/jlyu26');
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos
    });
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="App">{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</div>
  );
}

export default App;
