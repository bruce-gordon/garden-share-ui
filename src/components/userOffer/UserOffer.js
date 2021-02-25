import React from 'react';
import './UserOffer.scss';

const UserOffer = ({ id, updatedAt, produceName, produceType, quantity, unit, status, listingUser, offers }) => {

  const allOffers = offers.map(offer => {
    return(
      <div
        className='listing-offer'
        id={ id }
        key={ id }
      >
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
          <p>{ offer.unit }</p>
        </div>
        {offer.status === 'accepted' &&
          <div className='contact-info'>
            <p className='sub-heading'>Gardener name:</p>
            <p>{ listingUser.firstName }</p>
          </div>
        }
      </div>
    )

  })

  return (
    <div className='listing-section'>
      <h4 className='section-heading'>Listing I offered on</h4>
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
          <p>{ unit }</p>
        </div>
      </div>
      <h4 className='section-heading'>What I offered</h4>
      <section className='listing-offer-section'>
        { allOffers }
      </section>
    </div>
  )
}

export default UserOffer;
