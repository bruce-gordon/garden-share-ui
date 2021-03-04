import React, { useEffect } from 'react';
import './ProductPage.scss';
import Form from '../form/Form.js'
import { updateProductPageData, createOffer, clearOffer } from '../../redux/actions/actions.js'
import { connect, useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cookies } from 'react-cookie';

const ProductPage = ({ id, theUser, product, offer, cookies }) => {

  const { user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const parsedId = parseInt(id);
    dispatch(updateProductPageData(parsedId));
    dispatch(clearOffer());
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
    let cookieId = parseInt(cookies.cookies.userId);
    dispatch(createOffer(id, theUser.id, formattedOffer));
  }

  const formatDate = (inputdate) => {
    let date = new Date (inputdate);
    if (!isNaN(date.getTime())) {
      return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
     }
  }

  const confirmOffer = () => {
    if (offer.offerId) {
      return (
        <div className='recent-offer'>
          <h4 className='offer-text'>Your offer has been sent successfully!</h4>
          <p className='offer-text'>Produce name: <b>{ offer.produceName }</b></p>
          <p className='offer-text'>Type: <b>{ offer.produceType }</b></p>
        </div>
      )
    }
  }

  if (product.produceType) {
    return (
      <div className='product-page'>
        <div className='listing-portion'>
          <h2 className='product-header'>{capitalizeLetter(product.produceType)} {product.produceName}</h2>
          <div className='product-text-container'>
            <p><b>Amount Available:</b> { product.quantity } { product.unit }</p>
            <p><b>Description:</b> { product.description }</p>
            <p><b>Grown by:</b> { product.user.firstName }</p>
            <p><b>Harvested on:</b> { formatDate(product.dateHarvested) }</p>
            <p><b>Zip Code:</b> { product.zipCode }</p>
          </div>
        </div>
        <div className='offer-portion'>
          <h3>Complete This Form to Make an Offer</h3>
          { confirmOffer() }
          <Form
            submitFunc={ makeOffer }
          />
        </div>
      </div>
    )
  } else {
    return null
  }
}

const mapDispatchToProps = dispatch => ({
  updateProductPageData: text => dispatch(updateProductPageData(text)),
  createOffer: text => dispatch(createOffer(text)),
  clearOffer: () => dispatch(clearOffer())
})

function productPageState(state, ownProps) {
  return {
    product: state.productPage.productPageData,
    theUser: state.user.user,
    offer: state.offer,
    cookies: ownProps.cookies
  }
}

export default connect( productPageState, mapDispatchToProps )(ProductPage);
