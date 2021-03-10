import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import GardenShareLogo from '../../images/GardenShareLogo.png';
import Logout from '../logout/Logout.js'

const NavBar = () => {

  return(
    <nav className="navBar">
      <div className="navOptions">
        <img className='navbarLogo' src={GardenShareLogo} />
        <Link className='link' to='/homepage' data-testid='gardenShareLogo'>Home</Link>
        <Link to='/profile' className='link'>Profile</Link>
        <Link to='/create-new-listing' className='link'>Create New Listing</Link>
      </div>
      <Logout />
    </nav>
  )
}

export default NavBar;
