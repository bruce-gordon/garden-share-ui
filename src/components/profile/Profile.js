import React from 'react';
import './Profile.scss';
import MyListings from '../myListings/MyListings.js'

const Profile = () => {
  return (
    <div>
      <h2>User Name</h2>
      <div>
        <button>My Listings</button>
        <button>My Offers</button>
      </div>
      <MyListings />
      {/* {Conditional for rendering Listings/Offers Views} */}
    </div>
  )
}

export default Profile;