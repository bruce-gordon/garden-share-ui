import React, { useState, useEffect } from 'react'
import mockData from '../productContainer/mockData'
import ProductCard from '../productCard/ProductCard.js'

export default function HomePage() {
  const [listingData, setListingData] = useState([])
  const [sortedListings, setSortedListings] = useState([])

  useEffect(() => {
    setListingData(mockData.data.getListings)
  })

  const getDropdownValues = (veggies) => {
    return veggies.reduce((total, veggie) => {
      const capitalVeggie = capitalizeLetters(veggie.produceName)
      if (!total.includes(capitalVeggie)) {
        total.push(capitalVeggie)
      }
      return total
      }, [])
  }

  const capitalizeLetters = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const dropdownOptions = getDropdownValues(listingData).map(listing => {
    return(
      <option value={ listing }>
        { listing }
      </option>
    )
  })

  const products = listingData.map(listing => {
    return (
      <ProductCard 
        produceName={ listing.produceName } 
        type={ listing.type }
        quantity={ listing.quantity }
        unit={ listing.unit }
        zipCode={ listing.zipCode }
      />
    )
  })

  return (
    <div>
      <h2>Available Produce In Your Area</h2>
      <label htmlFor='vegetable-types'>Vegetable Types</label>
      <select id='vegetable-types'>
        <option value=''>
          Select
        </option>
        { dropdownOptions }
      </select>
      <div>
        { products }
      </div>
    </div>
  )
}
