import React, { useState, useEffect } from 'react'
import ProductCard from '../productCard/ProductCard.js'
import { updateListingData, loginUser } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { useCookies, withCookies } from 'react-cookie';

import './HomePage.scss'

const HomePage = ({ listingData, gardener }) => {

  const [selectedValue, setSelectedValue] = useState('')
  const [cookies, setCookie] = useCookies(['userId'])

  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loginUser(user, isAuthenticated));
    dispatch(updateListingData());
  }, [])


  // if ((!cookies.userId && gardener.user.id) || (cookies.userId === "undefined" && gardener.user.id)) {
  //   setCookie("userId", gardener.user.id, { path: "/" });
  // }

  const combineData = (dataObject) => {
    const dataKeys = Object.keys(dataObject);
    return dataKeys.reduce((final, key) => {
      dataObject[key].forEach(item => {
        final.push(item)
      })
      return final
    }, [])
  }

  const produceData = combineData(listingData)

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
    return (
      <option key={index} value={listing} data-testid={listing}>
        { capitalizeLetter(listing) }
      </option>
    )
  })

  const filteredProducts = filterByOption().map(listing => {
    if (listing.status === 'pending') {
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
    )}
  })

  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  }

  if (produceData.length) {
    return (
      <div className='homepage'>
        <h2 className='homepage-header'>Available Produce In Your Area</h2>
        <div className='filter'>
          <label htmlFor='productTypes'>Vegetable Types
          </label>
          <select id='productTypes' value={selectedValue} data-testid='veggieTypesDropdown' onChange={ handleChange }>
          <option value=''>
          All Listings
          </option>
          { dropdownOptions }
          </select>
        </div>
        <div className='filtered-products'>
        { filteredProducts }
        </div>
      </div>
    )
  } else {
    return (<h1 className='loading'>Loading...</h1>)
  }
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
