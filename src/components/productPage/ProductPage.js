import React, { useEffect } from 'react'
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
