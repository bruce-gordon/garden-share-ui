import React from 'react';
import './NavBar.scss';

const NavBar = () => {

  return(
    <nav className="navBar">
      <div className="navOptions"> 
        <p>Garden Share</p>
        <p>Profile</p>
        <p>Create New Listing</p>
        <p>About</p>
      </div>
      <p>Log Out</p>
    </nav>
  )
}

export default NavBar;