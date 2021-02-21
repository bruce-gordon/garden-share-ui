import React, { useState, useEffect } from 'react'
import mockData from '../../mockData'
import ProductCard from '../productCard/ProductCard.js'

export default function HomePage() {
  const [listingData, setListingData] = useState([])
  const [sortedListings, setSortedListings] = useState([])
  const [selectedValue, setSelectedValue] = useState('')

  useEffect(() => {
    setListingData(mockData.data.getListings)
  })

  const getDropdownValues = (veggies) => {
    return veggies.reduce((total, veggie) => {
      if (!total.includes(veggie.produceName)) {
        total.push(veggie.produceName)
      }
      return total
      }, [])
  }

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const filterByOption = () => {
    let dropdown = document.getElementById('productTypes')
    if (selectedValue) {
      return listingData.filter(product => {
        return (product.produceName === dropdown.value)
      })
    } else {
      return listingData
    }
  }

  const dropdownOptions = getDropdownValues(listingData).map(listing => {
    return (
      <option value={listing}>
        { capitalizeLetter(listing) }
      </option>
    )
  })

  const filteredProducts = filterByOption().map(listing => {
    return (
      <ProductCard
        key={listing.id}
        id={listing.id}
        produceName={capitalizeLetter(listing.produceName)}
        type={capitalizeLetter(listing.type)}
        quantity={listing.quantity}
        unit={listing.unit}
        zipCode={listing.zipCode}
      />
    )
  })

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  return (
    <div>
      <h2>Available Produce In Your Area</h2>
      <label htmlFor='productTypes'>Vegetable Types
        <select id='productTypes' value={ selectedValue } onChange={ handleChange }>
          <option value=''>
            All Listings
          </option>
          { dropdownOptions }
        </select>
      </label>
      <div>
        { filteredProducts }
      </div>
    </div>
  )
}
