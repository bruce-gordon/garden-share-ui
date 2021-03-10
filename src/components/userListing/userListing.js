import React from 'react';
import './userListing.scss';
import { connect, useDispatch } from 'react-redux'
import { acceptUserOffer, declineUserOffer, updateUserListings } from '../../redux/actions/actions.js'

const UserListing = ({ id, updatedAt, produceType, produceName, quantity, unit, offers, status, user, cookies }) => {

const dispatch = useDispatch()

  const formatDate = (inputdate) => {
    let date = new Date (inputdate);
    if (!isNaN(date.getTime())) {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
     }
  }

  const acceptOffer = (offerId) => {
    dispatch(acceptUserOffer(offerId, user.id))
    let cookieId = parseInt(cookies.cookies.userId);
    // dispatch(updateUserListings(user.id))
    // dispatch(updateUserListings(user.id))
  }

  const declineOffer = (offerId) => {
    dispatch(declineUserOffer(offerId))
    let cookieId = parseInt(cookies.cookies.userId);
    dispatch(updateUserListings(user.id))
    dispatch(updateUserListings(user.id))
  }

  const filteredOffers = offers.filter(offer => {
    return (offer.status === 'pending' || offer.status === 'accepted')
  })

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const allOffers = filteredOffers.map(offer => {
    return(
      <div
        className='listing-offer'
        id={ offer.id }
        key={ offer.id }>
        <div className='sub-section' id={ offer.id }>
          <p className='sub-heading'>Date Posted</p>
          <p>{ formatDate(offer.updatedAt) }</p>
        </div>
        <div className='sub-section' id={ offer.id }>
          <p className='sub-heading'>Listing Item</p>
          <p>{ capitalizeLetter(offer.produceType) } { offer.produceName }</p>
        </div>
        <div className='sub-section' id={ offer.id }>
          <p className='sub-heading'>Quantity</p>
          <p>{ offer.quantity }</p>
        </div>
        <div className='sub-section' id={ offer.id }>
          <p className='sub-heading'>Unit</p>
          <p>{ offer.unit }</p>
        </div>
        { offer.status === 'pending' &&
          <div className='offer-options'>
            <button className='accept' onClick={ () => acceptOffer(offer.id) }>Accept</button>
            <button className='decline' onClick={ () => declineOffer(offer.id) }>Decline</button>
          </div>
        }
        { offer.status === 'accepted' &&
          <div className='contact-info'>
            <p className='sub-heading'>Contact Information</p>
            <p>First name: <b>{ offer.user.firstName }</b></p>
            <p className='email'>{ offer.user.email }</p>
          </div>
        }
      </div>
    )
  })

  return (
    <div className='listing-section'>
      <h4 className='section-heading'>Listing</h4>
      <div className='user-listing'>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Date Posted</p>
          <p>{ formatDate(updatedAt) }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Listing Item</p>
          <p>{ capitalizeLetter(produceType) } { produceName }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Quantity</p>
          <p>{ quantity }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Unit</p>
          <p>{ unit }</p>
        </div>
      </div>
      <h4 className='section-heading'>Offers</h4>
      <section className='listing-offer-section'>
        { allOffers }
      </section>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  acceptUserOffer: (offerId) => dispatch(acceptUserOffer(offerId)),
  declineUserOffer: (offerId) => dispatch(declineUserOffer(offerId)),
  updateUserListings: (userId) => dispatch(updateUserListings(userId))
})

function userListingState(state) {
  return {
    listings: state.userListings.listings,
    user: state.user.user
  }
}



export default connect(userListingState, mapDispatchToProps)(UserListing);
