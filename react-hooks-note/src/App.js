import React from 'react';
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import About from './pages/About';

// Can also use Link, but doesn't have activeClass or activeStype from NavLink
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: 'green' }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: 'green' }}>
              About
            </NavLink>
          </li>
        </ul>
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
