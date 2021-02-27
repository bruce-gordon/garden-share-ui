import React from 'react';
import './UserListing.scss';

const UserListing = ({ id, updatedAt, produceType, produceName, quantity, units, offers, status }) => {

  const allOffers = offers.map(offer => {
    return(
      <div
        className='listing-offer'
        id={ id }
        key={ id }>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Date Posted</p>
          <p>{ offer.updatedAt }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Listing Item</p>
          <p>{ offer.produceType } { offer.produceName }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Quantity</p>
          <p>{ offer.quantity }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Unit</p>
          <p>{ offer.units }</p>
        </div>
        { offer.status === 'pending' &&
        <div className='offer-options'>
          <button className='accept'>Accept</button>
          <button className='decline'>Decline</button>
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
          <p>{ updatedAt }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Listing Item</p>
          <p>{ produceType } { produceName }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Quantity</p>
          <p>{ quantity }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Unit</p>
          <p>{ units }</p>
        </div>
      </div>
      <h4 className='section-heading'>Offers</h4>
      <section className='listing-offer-section'>
        { allOffers }
      </section>
    </div>
  )
}

export default UserListing;
