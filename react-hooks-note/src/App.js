import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => {
            return <div>welcome home</div>;
          }}
        ></Route>
        <Route path="/about" render={About}></Route>
        <Route
          path="/user/:username"
          render={({ match }) => {
            return <div>welcome {match.params.username}</div>;
          }}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
