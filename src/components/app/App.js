import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navBar/NavBar.js';
// import Login from '../login/Login'
import SignUp from '../signUp/SignUp'
import HomePage from '../homePage/HomePage'

function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
      </div>
      <Switch>

        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/homepage'>
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
