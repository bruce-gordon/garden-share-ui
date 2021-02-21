import './App.scss';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../navBar/NavBar.js';
import Login from '../login/Login.js'
import SignUp from '../signUp/SignUp.js'
import HomePage from '../homePage/HomePage.js'
import ProductPage from '../productPage/ProductPage.js'

function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/homepage'>
          <HomePage />
        </Route>
        <Route
          path={'/listing/:id'}
          render={({match}) => {
            return (
              <ProductPage
                id={ `${match.params.id}` }
                key={ `${match.params.id}` }
              />
            )
          }}>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
