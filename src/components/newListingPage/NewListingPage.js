import React, { useState, useEffect } from 'react';
import './NewListingPage.scss';
import Form from '../form/Form.js';
import { connect, useDispatch } from 'react-redux'
import { createListing, clearNewListings } from '../../redux/actions/actions.js'
import { cookies } from 'react-cookie';

const NewListingPage = ({ user, addedListings, cookies }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearNewListings());
  }, [])
  // const [newListings, setNewListings] = useState([])

  const makeListing = (data) => {
    const formattedListing = {
      itemName: data.itemName,
      itemType: data.itemType,
      description: data.description,
      quantity: parseInt(data.quantity),
      unit: data.unit,
      date: data.date
    }
    let cookieId = parseInt(cookies.cookies.userId);
    dispatch(createListing(user.id, formattedListing))
  }

  const userListings = addedListings.map(listing => {
    return(
      <div key={ listing.id } className='new-listing-card'>
        <h3 className='cardHeader'>{ listing.produceName }</h3>
        <p>Type: <i>{ listing.produceType }</i></p>
        <p>{ listing.quantity } { listing.unit }</p>
        <p>{ listing.dateHarvested }</p>
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
  createListing: (userId, listing) => dispatch(createListing(userId, listing)),
  clearNewListings: () => dispatch(clearNewListings())
})

function newListingPageState(state, ownProps) {
  return {
    user: state.user.user,
    addedListings: state.userListings.newListings,
    cookies: ownProps.cookies
  }
}


export default connect(newListingPageState, mapDispatchToProps)(NewListingPage);
