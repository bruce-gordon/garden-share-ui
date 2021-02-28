import React, { useState } from 'react';
import './NewListingPage.scss';
import Form from '../form/Form.js';
import { connect, useDispatch } from 'react-redux'
import { createListing } from '../../redux/actions/actions.js'


const NewListingPage = ({ user }) => {

  const [newListings, setNewListings] = useState([])
  const dispatch = useDispatch()

  const makeListing = (data) => {
    const formattedListing = {
      itemName: data.itemName,
      itemType: data.itemType,
      description: data.description,
      quantity: parseInt(data.quantity),
      unit: data.unit,
      date: data.date
    }
    console.log('formatted listing', formattedListing)
    dispatch(createListing(user.id, formattedListing))
    setNewListings([...newListings, formattedListing])
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

const mapDispatchToProps = dispatch => ({
  createListing: (userId, listing) => dispatch(createListing(userId, listing))
})

function newListingPageState(state) {
  return {
    user: state.user.user
  }
}


export default connect(newListingPageState, mapDispatchToProps)(NewListingPage);