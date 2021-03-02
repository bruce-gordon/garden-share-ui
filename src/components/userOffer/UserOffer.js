import React from 'react';
import './UserOffer.scss';

const UserOffer = ({ id, updatedAt, produceName, produceType, quantity, unit, status, listingUser, offers, cookies }) => {

  const formatDate = (inputdate) => {
    let date = new Date (inputdate);
    if (!isNaN(date.getTime())) {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
     }
  }

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const filteredOffers = offers.filter(offer => offer.status !== 'declined');

  const allOffers = filteredOffers.map((offer, index) => {
    return(
      <div
        className='listing-offer'
        id={ id }
        key={ id + index }
      >
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Date Posted</p>
          <p className='offer-value'>{ formatDate(offer.updatedAt) }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Listing Item</p>
          <p className='offer-value'>{ capitalizeLetter(offer.produceType) } { capitalizeLetter(offer.produceName) }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Quantity</p>
          <p className='offer-value'>{ offer.quantity }</p>
        </div>
        <div className='sub-section' id={ id }>
          <p className='sub-heading'>Unit</p>
          <p className='offer-value'>{ offer.unit }</p>
        </div>
        {offer.status === 'accepted' &&
          <div className='contact-info'>
            <p className='sub-heading'>Gardener name:</p>
            <p className='offer-value'>{ listingUser.firstName }</p>
          </div>
        }
      </div>
    )
  })

  if (allOffers.length) {
    return (
      <div className='listing-section'>
        <h4 className='section-heading'>Listing I offered on</h4>
        <div className='user-listing'>
          <div className='sub-section' id={ id }>
            <p className='sub-heading'>Date Posted</p>
            <p className='offer-value'>{ formatDate(updatedAt) }</p>
          </div>
          <div className='sub-section' id={ id }>
            <p className='sub-heading'>Listing Item</p>
            <p className='offer-value'>{ capitalizeLetter(produceType) } { produceName }</p>
          </div>
          <div className='sub-section' id={ id }>
            <p className='sub-heading'>Quantity</p>
            <p className='offer-value'>{ quantity }</p>
          </div>
          <div className='sub-section' id={ id }>
            <p className='sub-heading'>Unit</p>
            <p className='offer-value'>{ unit }</p>
          </div>
        </div>
        <h4 className='section-heading'>What I offered</h4>
          <section className='listing-offer-section'>
            { allOffers }
          </section>
      </div>
    )
  } else {
    return null
  }
}

export default UserOffer;
