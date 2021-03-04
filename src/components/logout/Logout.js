import React from "react";
import './Logout.scss';
import { useAuth0 } from "@auth0/auth0-react";
import { useCookies } from 'react-cookie';

const Logout = () => {
  const { logout } = useAuth0();
  const [cookies, setCookie, removeCookie] = useCookies()

  const removeUser = () => {

    removeCookie('userId')
    logout({ returnTo: 'https://garden-share-front-end.herokuapp.com/' })
  }

  return (
    <button className='logout-button' onClick={ removeUser }>
      Log Out
    </button>
  );
};

export default Logout;