import React, { useEffect } from 'react'
import UserOffer from '../userOffer/UserOffer.js'
import { connect, useDispatch } from 'react-redux'
import { updateUserOffers } from '../../redux/actions/actions.js';
import mockUserOffers from '../../mockData/mockUserOffer.js'


const MyOffers = ({ userListings }) => {
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(updateUserOffers("userId", mockUserOffers.data.getUserOffers.listings))
    // console.log(myOffers)
    // console.log('filtered offers', filterOffers(myOffers, 'pending'))
  }, [])

  const filterListings = (listings, listingType) => {
    return listings.filter(listing => {
      if(listing.status === listingType) {
        return listing
      }
    })
  }

  const openListings = filterListings(userListings, 'open').map(listing => {
    console.log(listing)
    return (
      <UserOffer 
        id={ listing.id }
        key={ listing.id }
        updatedAt={ listing.updatedAt }
        produceType={ listing.produceType }
        produceName={ listing.produceName }
        quantity={ listing.quantity }
        unit={ listing.unit }
        status={ listing.status }
        listingUser={ listing.user }
        offers={ listing.offers }
      />
    )
  })

  const acceptedListings = filterListings(userListings, 'accepted').map(listing => {
    console.log(listing)
    return (
      <UserOffer 
        id={ listing.id }
        key={ listing.id }
        updatedAt={ listing.updatedAt }
        produceType={ listing.produceType }
        produceName={ listing.produceName }
        quantity={ listing.quantity }
        unit={ listing.unit }
        status={ listing.status }
        listingUser={ listing.user }
        offers={ listing.offers }
      />
    )
  })

  return (
    <div>
      <div style={{border: '5px solid black'}}>
        <h3>My Open Offers</h3>
        <div>
          { openListings }
        </div>
      </div>
      <div>
        <h3>My Accepted Offers</h3>
        <div style={{border: '5px solid purple'}}>
          { acceptedListings }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateUserOffers: text => dispatch(updateUserOffers(text))
})

function myOffersState(state) {
  return {
    userListings: state.userOffers.offersList
  }
}

export default connect(myOffersState, mapDispatchToProps)(MyOffers)