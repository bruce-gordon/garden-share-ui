import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import GardenShareLogo from '../../images/GardenShareLogo.png';
const NavBar = () => {

  return(
    <nav className="navBar">
      <div className="navOptions"> 
        <Link to='/homepage' className='logoLink' data-testid='gardenShareLogo'><img src={GardenShareLogo} className='logo' /></Link> 
        <Link to='/profile' className='link'>Profile</Link>
        <Link to='/create-new-listing' className='link'>Create New Listing</Link>
        <Link to='/about' className='link'>About</Link>
      </div>
      <Link to='/login' className='logOut'>Log Out</Link>
    </nav>
  )
}

export default NavBar;