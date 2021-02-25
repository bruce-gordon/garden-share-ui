import React, { useState } from 'react';
import './Profile.scss';
import MyListings from '../myListings/MyListings.js'
import MyOffers from '../myOffers/MyOffers.js'

const Profile = () => {

  const [view, setView] = useState(true)

  const handleClick = (e) => {
    if(e.target.innerText === 'My Listings') {
      setView(true)
    } else if (e.target.innerText === 'My Offers') {
      setView(false)
    }
  }

  const highlightMyListings = () => {
    return view ? 'button-selected' : 'profile-button'
  }

  const highlightMyOffers = () => {
    return !view ? 'button-selected' : 'profile-button'
  }

  return (
    <div className='profile-page'>
      <h2 className='user-name'>User Name</h2>
      <div className='button-container'>
        <button className={ highlightMyListings() } onClick={ handleClick }>My Listings</button>
        <button className={ highlightMyOffers() } onClick={ handleClick }>My Offers</button>
      </div>
      <div>
        { view && <MyListings /> }
      </div>
      <div>
        { !view && <MyOffers /> }
      </div>
    </div>
  )
}

export default Profile;
