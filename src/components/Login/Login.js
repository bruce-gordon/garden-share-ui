import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Login.scss';
import GardenShareLogo from '../../images/GardenShareLogo.png';

const Login = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className='login'>
      <h1 className='welcome-header'>Welcome To</h1>
      <img className='logo' src={GardenShareLogo} />
      <div className='login-container'>
        <h2 className='login-header'>Please Log In to Access Garden Share</h2>
        <button className='login-button' onClick={ () => loginWithRedirect() }>
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login;
