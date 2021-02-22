import React, { useState } from 'react'
import Form from '../form/Form.js'

const NewListingPage = () => {

  const [newListings, setNewListings] = useState([])

  const makeListing = (data) => {
    setNewListings([...newListings, data])
    // console.log('data', data)
    // dispatch(updateUserOffers(data))
  }

  const userListings = newListings.map(listing => {
    return(
      <div>
        <h3 className='cardHeader'>{ listing.itemName }</h3>
        <p>Type: <i>{ listing.itemType }</i></p>
        <p>{ listing.quantity } { listing.unit }</p>
        <p>{ listing.date }</p>
    </div>
    )
  })

  return (
    <div>
      <h2>List What You are Offering</h2>
      { userListings.length >= 1 && <h3>Your New Listings</h3>}
      <div>
        { userListings }
      </div>
      <Form
        submitFunc={ makeListing }
      />
    </div>
  )
}


export default NewListingPage;