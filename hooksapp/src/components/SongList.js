import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

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
  const [age, setAge] = useState(20);
  const addSong = title => {
    // pass in the new state data which is going to completely replace the old one
    setSongs([...songs, { title, id: uuid() }]);
  };
  // functional components has no access to React life-cycle methods
  // so when it need to do something when component updates, it need to use class
  // component and hook it into a life-cycle method
  // but `useEffect` here can do the same thing for functional component
  // useEffect takes a callback function as parameter, and it will get called
  // when component renders or re-renders caused by the data passed in as
  // second parameter, which is an array
  // typically it could be used to communicate with database/API endpoints
  useEffect(() => {
    console.log(`useEffect hook ran`, age);
  }, [age]);
  useEffect(() => {
    console.log(`useEffect hook ran`, songs);
  }, [songs]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
