import React, { useEffect } from 'react';
import UserListing from '../userListing/UserListing.js'
import mockUserListings from '../../mockData/mockUserListings.js'
import { connect, useDispatch } from 'react-redux'
import { updateUserListings } from '../../redux/actions/actions.js';
import './MyListings.scss'

const MyListings = ({ myListings }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUserListings("userId", mockUserListings.data.getUserListings.listings))
  }, [])

  const filterListings = (listings, listingType) => {
    return listings.filter(listing => {
      if(listing.status === listingType) {
        return listing
      }
    })
  }

  const openListings = filterListings(myListings, 'open').map(listing => {
    return (
      <UserListing
        id={ listing.id }
        key={ listing.id }
        updatedAt={ listing.updatedAt }
        produceType={ listing.produceType }
        produceName={ listing.produceName }
        quantity={ listing.quantity }
        units={ listing.units }
        offers={ listing.offers }
        status={ listing.status }
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
        units={ listing.units }
        offers={ listing.offers }
        status={ listing.status }
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
  updateUserListings: text => dispatch(updateUserListings(text))
})

function myListingsState(state) {
  return {
    myListings: state.userListings.listings
  }
}


export default connect(myListingsState, mapDispatchToProps)(MyListings);
