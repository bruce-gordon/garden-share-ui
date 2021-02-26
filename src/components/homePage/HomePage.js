import React, { useState, useEffect } from 'react'
import mockData from '../../mockData/mockData.js'
import ProductCard from '../productCard/ProductCard.js'
import { updateListingData, loginUser } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const HomePage = ({ listingData, gardener }) => {

  const [selectedValue, setSelectedValue] = useState('')
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser(user, isAuthenticated))
    dispatch(updateListingData(mockData.data.getListings))
    console.log('the user information', user, isAuthenticated, isLoading)
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
      <option key={index} value={listing}>
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

  // if (!isLoading) {
  //   dispatch(loginUser(user, isAuthenticated))
  // }

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

const mapDispatchToProps = dispatch => ({
  loginUser: (user, isAuthenticated) => dispatch(loginUser(user, isAuthenticated)),
  updateListingData: text => dispatch(updateListingData(text)),
})

function homePageState(state) {
  return {
    listingData: state.allListings.listingData,
    gardener: state.user
  }
}

export default connect( homePageState, mapDispatchToProps )(HomePage)
