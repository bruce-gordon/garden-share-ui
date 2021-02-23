import React from 'react';
import './UserOffer.scss';

const UserOffer = ({ id, updatedAt, produceName, produceType, quantity, unit, status, listingUser, offers }) => {

  const allOffers = offers.map(offer => {
    return(
      <div style={{border: '3px solid green'}} id={ id } key={ id } >
        <p>{ offer.updatedAt }</p>
        <p>{ offer.produceType } { offer.produceName }</p>
        <p>{ offer.quantity }</p>
        <p>{ offer.unit }</p>
        {offer.status === 'accepted' && 
          <p>{ listingUser.firstName }</p>
        }
      </div>
    )

  })

  return (
    <div>
      <h4>Listing</h4>
      <div style={{border: '3px solid red'}}>
        <p>Date Posted</p>
        <p>Listing Item</p>
        <p>Quantity</p>
        <p>Unit</p>
      </div>
      <div style={{border: '3px solid blue'}}>
        <p>{ updatedAt }</p>
        <p>{ produceType } { produceName }</p>
        <p>{ quantity }</p>
        <p>{ unit }</p>
      </div>
      <h4>Offers</h4>
      <div style={{border: '3px solid yellow'}}>
        <p>Date Posted</p>
        <p>Listing Item</p>
        <p>Quantity</p>
        <p>Unit</p>
        { status === 'accepted' && <p>Gardener</p>}
      </div>
      <div style={{border: '3px solid green'}}>
        { allOffers }
      </div>
    </div>
  )
}

export default UserOffer;