import React, { useState, useEffect } from 'react'
import mockListing from '../../mockData/mockListing.js'
import Form from '../form/Form.js'
import { updateProductPageData } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'

const ProductPage = ({ id, product }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('chicken feet', mockListing.data.showListing.listing)
    dispatch(updateProductPageData(id, mockListing.data.showListing.listing))
  }, [])

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <div>
      { console.log(product) }
      <h2>{capitalizeLetter(product.produceType)} {product.produceName}</h2>
      <div>
        <p>{ product.quantity } { product.unit }</p>
        <p>{ product.description }</p>
        <p>Grown by: { product.user.firstName }</p>
        <p>Harvested on: { product.dateHarvested }</p>
        <p>Zip Code: { product.zipCode }</p>
      </div>
      <Form />
      <button>Make Offer</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateProductPageData: text => dispatch(updateProductPageData(text))
})

function productPageState(state) {
  return {
    product: state.productPage.productPageData
  }
}

export default connect( productPageState, mapDispatchToProps )(ProductPage);
