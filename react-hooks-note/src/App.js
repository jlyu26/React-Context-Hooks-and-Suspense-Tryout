import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import About from './pages/About';

// Can also use Link, but doesn't have activeClass or activeStype from NavLink
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const onClickHandle = () => {
    setLoggedIn(!loggedIn);
  };

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
            <NavLink to="/about" activeStyle={{ color: 'green' }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/john" activeStyle={{ color: 'green' }}>
              User John
            </NavLink>
          </li>
        </ul>
        {`logged in: ${loggedIn}`}
        <button onClick={onClickHandle}>{loggedIn ? 'Logout' : 'Login'}</button>
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
            return loggedIn ? <div>welcome {match.params.username}</div> : <Redirect to="/" />;
          }}
        ></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
