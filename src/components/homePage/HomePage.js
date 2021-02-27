import React, { useState, useEffect } from 'react'
import mockData from '../../mockData/mockData.js'
import ProductCard from '../productCard/ProductCard.js'
import { updateListingData, loginUser } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const HomePage = ({ listingData, gardener }) => {

  const [selectedValue, setSelectedValue] = useState('')
  const [produceData, setProduceData] = useState([])
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser(user, isAuthenticated))
    dispatch(updateListingData())
    setProduceData(combineData(listingData))
    console.log(produceData)
  }, [])

  const getDropdownValues = (veggies) => {
    return veggies.reduce((total, veggie) => {
      if (!total.includes(veggie.produce_name)) {
        total.push(veggie.produce_name)
      }
      return total
      }, [])
  }


  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const combineData = (dataObject) => {
    const dataKeys = Object.keys(listingData);
    return dataKeys.reduce((final, key) => {
      dataObject[key].forEach(item => {
        final.push(item)
      })
      return final
    }, [])
  }

  const filterByOption = () => {
    let dropdown = document.getElementById('productTypes')
    if (selectedValue) {
      return produceData.filter(product => {
        return (product.produce_name === dropdown.value)
      })
    } else {
      return produceData
    }
  }

  const dropdownOptions = getDropdownValues(produceData).map((listing, index) => {
    console.log('puppy', listing)
    return (
      <option key={index} value={listing} data-testid={listing}>
        { capitalizeLetter(listing) }
      </option>
    )
  })

  const filteredProducts = filterByOption().map(listing => {
    console.log('cat', listing)
    return (
      <ProductCard
        key={listing.id}
        id={listing.id}
        produceName={capitalizeLetter(listing.produce_name)}
        type={capitalizeLetter(listing.produce_type)}
        quantity={listing.quantity}
        unit={listing.unit}
        zipCode={listing.zip_code}
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
