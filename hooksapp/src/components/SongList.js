import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
  // hooks allows function components to use states
  // `useState` returns array of two value
  // first is the state data itself, in this case is the array of objects
  // second is the function to edit the state
  // use array destracturing to assign them
  const [songs, setSongs] = useState([
    { title: 'song 1', id: 1 },
    { title: 'song 2', id: 2 },
    { title: 'song 3', id: 3 }
  ]);
  const addSong = () => {
    // pass in the new state data which is going to completely replace the old one
    setSongs([...songs, { title: 'new song', id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add song</button>
    </div>
  );
};

export default SongList;
