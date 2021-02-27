import React, { useEffect } from 'react';
import './ProductPage.scss';
import mockListing from '../../mockData/mockListing.js'
import Form from '../form/Form.js'
import { updateProductPageData, updateUserOffers } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'

const ProductPage = ({ id, product }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProductPageData(id, mockListing.data.showListing.listing))
  }, [])

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const makeOffer = ( data) => {
    console.log('data', data)
    dispatch(updateUserOffers(id, data))
  }

  if (product.produceType) {
    return (
      <div className='product-page'>
        { console.log(product) }
        <h2 className='product-header'>{capitalizeLetter(product.produceType)} {product.produceName}</h2>
        <div className='product-text-container'>
          <p><b>Amount Available:</b> { product.quantity } { product.unit }</p>
          <p><b>Description:</b> { product.description }</p>
          <p><b>Grown by:</b> { product.user.firstName }</p>
          <p><b>Harvested on:</b> { product.dateHarvested }</p>
          <p><b>Zip Code:</b> { product.zipCode }</p>
        </div>
        <h3>Complete the form to make an Offer</h3>
        <Form
          submitFunc={ makeOffer }
        />

      </div>
    )
  } else {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  updateProductPageData: text => dispatch(updateProductPageData(text)),
  updateUserOffers: text => dispatch(updateUserOffers(text))
})

function productPageState(state) {
  return {
    product: state.productPage.productPageData
  }
}

export default connect( productPageState, mapDispatchToProps )(ProductPage);
