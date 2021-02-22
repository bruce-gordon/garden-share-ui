import React from 'react';
import './UserListing.scss';

const UserListing = ({ id, updatedAt, produceType, produceName, quantity, units, offers }) => {

  const allOffers = offers.map(offer => {
    return(
      <div style={{border: '3px solid green'}} id={ id } key={ id } >
        <p>{ offer.updatedAt }</p>
        <p>{ offer.produceType } { offer.produceName }</p>
        <p>{ offer.quantity }</p>
        <p>{ offer.units }</p>
        { offer.status === 'pending' &&         
        <div>
          <button>Accept</button>
          <button>Decline</button>
        </div>
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
      <div style={{border: '3px solid blue'}} id={ id }>
        <p>{ updatedAt }</p>
        <p>{ produceType } { produceName }</p>
        <p>{ quantity }</p>
        <p>{ units }</p>
      </div>
      <h4>Offers</h4>
      <div style={{border: '3px solid yellow'}}>
        <p>Date Posted</p>
        <p>Listing Item</p>
        <p>Quantity</p>
        <p>Unit</p>
      </div>
      <div>
        { allOffers }
      </div>
    </div>
  )
}

export default UserListing;