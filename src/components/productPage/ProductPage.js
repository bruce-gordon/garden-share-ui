import React, { useEffect } from 'react';
import './ProductPage.scss';
import mockListing from '../../mockData/mockListing.js'
import Form from '../form/Form.js'
import { updateProductPageData, createOffer } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const ProductPage = ({ id, theUser, product }) => {

  const { user } = useAuth0();

  const dispatch = useDispatch()

  useEffect(() => {
    const parsedId = parseInt(id)
    dispatch(updateProductPageData(parsedId))
  }, [])

  const capitalizeLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  const makeOffer = (offer) => {
    const formattedOffer = {
      itemName: offer.itemName,
      itemType: offer.itemType,
      description: offer.description,
      quantity: parseInt(offer.quantity),
      unit: offer.unit,
      date: offer.date
    }
    console.log(parseInt(id), theUser.id, formattedOffer)
    dispatch(createOffer(parseInt(id), theUser.id, formattedOffer))
  }

  const formatDate = (inputdate) => {
    let date = new Date (inputdate);
    if (!isNaN(date.getTime())) {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
     }
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
          <p><b>Harvested on:</b> { formatDate(product.dateHarvested) }</p>
          <p><b>Zip Code:</b> { product.zipCode }</p>
        </div>
        <h3>Complete This Form to Make an Offer</h3>
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
  createOffer: text => dispatch(createOffer(text))
})

function productPageState(state) {
  return {
    product: state.productPage.productPageData,
    theUser: state.user.user
  }
}

export default connect( productPageState, mapDispatchToProps )(ProductPage);
