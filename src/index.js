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
    domain='dev-wbsuhtm2.us.auth0.com'
    clientId='RuU4p6SrqA2mOiAtzGVQ3QDtCGaS0iKP'
    redirectUri='https://garden-share-front-end.herokuapp.com/homepage'
  >
    <CookiesProvider>
      <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
      </BrowserRouter>
    </CookiesProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
