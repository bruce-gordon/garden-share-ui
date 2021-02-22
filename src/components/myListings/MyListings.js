import React, { useEffect } from 'react';
import UserListing from '../userListing/UserListing.js'
import mockUserListings from '../../mockData/mockUserListings.js'
import { connect, useDispatch } from 'react-redux'
import { updateUserListings } from '../../redux/actions/actions.js';

const MyListings = ({ myListings }) => {
  // console.log(mockUserListings)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('mock user listings', mockUserListings.data.getUserListings.listings)
    dispatch(updateUserListings("userId", mockUserListings.data.getUserListings.listings))
    console.log('filtered listings', filterListings(myListings, 'open'))
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
      />
    )
  })
  return (
    <div>
      <div style={{border: '5px solid black'}}>
        <h3>My Open Listings</h3>
        <div style={{border: '5px solid pink'}}>
          { openListings }
        </div>
      </div>
      <div>
        <h3>My Accepted Listings</h3>
        <div style={{border: '5px solid purple'}}>
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
