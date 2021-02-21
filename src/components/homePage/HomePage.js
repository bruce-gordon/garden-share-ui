import React, { useState, useEffect } from 'react'
import mockData from '../productContainer/mockData'
import ProductCard from '../productCard/ProductCard.js'

export default function HomePage() {
  const [listingData, setListingData] = useState([])
  const [sortedListings, setSortedListings] = useState([])
  const [selectedValue, setSelectedValue] = useState([])
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
  
  const filterByOption = (event) => {
    let dropdown = document.getElementById('types')
  
    return listingData.filter(product => {
      return (product.produceName == dropdown.value)
    })
  }

  const dropdownOptions = getDropdownValues(listingData).map(listing => {
    return(
      <option value={listing} onChange={ () => filterByOption() }>
        { listing }
      </option>
    )
  })

  const filteredProducts = filterByOption().map(listing => {
    return (
      <ProductCard
        produceName={listing.produceName}
        type={listing.type}
        quantity={listing.quantity}
        unit={listing.unit}
        zipCode={listing.zipCode}
      />
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
      <label htmlFor='types'>Vegetable Types</label>
      <select id='types'>
        <option value=''>
          Select
        </option>
        { dropdownOptions }
      </select>
      <div>
        { filteredProducts }
      </div>
    </div>
  )
}
