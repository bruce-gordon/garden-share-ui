import React, { useEffect } from 'react';
import UserListing from '../userListing/userListing.js'
import { connect, useDispatch } from 'react-redux'
import { updateUserListings } from '../../redux/actions/actions.js';
import { cookies } from 'react-cookie';
import './MyListings.scss'

const MyListings = ({ myListings, user, cookies }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    // let cookieId = parseInt(cookies.cookies.userId)
    dispatch(updateUserListings(user.id))
  }, [])

  const filterListings = (listings, listingType) => {
    return listings.filter(listing => {
      if(listing.status === listingType) {
        return listing
      }
    })
  }

  const openListings = filterListings(myListings, 'pending').map(listing => {
    return (
      <UserListing
        id={ listing.id }
        key={ listing.id }
        updatedAt={ listing.updatedAt }
        produceType={ listing.produceType }
        produceName={ listing.produceName }
        quantity={ listing.quantity }
        unit={ listing.unit }
        offers={ listing.offers }
        status={ listing.status }
        cookies={ cookies }
      />
    )
  })

  const acceptedListings = filterListings(myListings, 'accepted').map(listing => {
    return (
      <UserListing
        id={ listing.id }
        key={ listing.id }
        updatedAt={ listing.updatedAt }
        produceType={ listing.produceType }
        produceName={ listing.produceName }
        quantity={ listing.quantity }
        unit={ listing.unit }
        offers={ listing.offers }
        status={ listing.status }
        cookies={ cookies }
      />
    )
  })

  return (
    <div>
      <div className='my-listings'>
        <h3>My Open Listings</h3>
        <div>
          { openListings }
        </div>
      </div>
      <div className='my-listings'>
        <h3>My Accepted Listings</h3>
        <div>
          { acceptedListings }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateUserListings: (userId) => dispatch(updateUserListings(userId))
})

function myListingsState(state) {
  return {
    myListings: state.userListings.listings,
    user: state.user.user
  }
}


export default connect(myListingsState, mapDispatchToProps)(MyListings);
