import React, { useState, useEffect } from 'react'
import mockData from '../../mockData/mockData.js'
import ProductCard from '../productCard/ProductCard.js'
import { updateListingData } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'

const HomePage = ({ listingData }) => {
  // const [listingData, setListingData] = useState([])
  // const [sortedListings, setSortedListings] = useState([])
  const [selectedValue, setSelectedValue] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateListingData(mockData.data.getListings))
    // setListingData(mockData.data.getListings)
  }, [])

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

  const dropdownOptions = getDropdownValues(listingData).map((listing, index) => {
    return (
      <option key={index} value={listing} data-testid={listing}>
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
        <select id='productTypes' value={selectedValue} data-testid='veggieTypesDropdown' onChange={ handleChange }>
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

const mapDispatchToProps = dispatch => ({
  updateListingData: text => dispatch(updateListingData(text))
})

function homePageState(state) {
  return {
    listingData: state.allListings.listingData
  }
}

export default connect( homePageState, mapDispatchToProps )(HomePage)
