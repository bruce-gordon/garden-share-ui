import React, { useState } from 'react';
import './NewListingPage.scss';
import Form from '../form/Form.js';

const NewListingPage = () => {

  const [newListings, setNewListings] = useState([])

  const makeListing = (data) => {
    setNewListings([...newListings, data])
    // console.log('data', data)
    // dispatch(updateUserOffers(data))
  }

  const userListings = newListings.map(listing => {
    return(
      <div className='new-listing-card'>
        <h3 className='cardHeader'>{ listing.itemName }</h3>
        <p>Type: <i>{ listing.itemType }</i></p>
        <p>{ listing.quantity } { listing.unit }</p>
        <p>{ listing.date }</p>
    </div>
    )
  })

  return (
    <div className='new-listing-page'>
      { userListings.length >= 1 && <h2>Your New Listings</h2>}
      <div className='new-listings-container'>
        { userListings }
      </div>
      <h2>Create New Listing Here</h2>
      <Form
        submitFunc={ makeListing }
      />
    </div>
  )
}


export default NewListingPage;