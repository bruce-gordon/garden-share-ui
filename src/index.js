import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/app/App.js';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Auth0Provider
    domain='dev-l5m32l-t.us.auth0.com'
    clientId='T1lkRoJ1DGqY7DOQeB2ugvmqBfidA0o4'
    redirectUri='https://garden-share-ui.herokuapp.com/homepage'
  >
    <BrowserRouter>
      <CookiesProvider>
        <Provider store={ store }>
            <App />
        </Provider>
      </CookiesProvider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById('root')
);


reportWebVitals();
