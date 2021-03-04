import React from "react";
import './Logout.scss';
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button className='logout-button' onClick={() => logout({ returnTo: 'https://garden-share-front-end.herokuapp.com/' })}>
      Log Out
    </button>
  );
};

export default Logout;