import React from 'react'
import './ProductCard.scss'
import { Link } from "react-router-dom"
import dropdownData from '../../formOptions/optionData.js'

export default function ProductCard({ id, produceName, type, quantity, unit, zipCode }) {
  const productImage = (produceName) => {
    let match = dropdownData.find(dropdown => {
      return dropdown.option === produceName
    });
    return match.image
  }

  return (
    <Link className='product-link' data-testid='productCard' to={`/listing/${id}`}>
      <div className='produce-details'>
        <h3 className='cardHeader product-text'>{ produceName }</h3>
        <p>Type: <i>{ type }</i></p>
        <p><i>{ quantity } { unit }</i></p>
        <p>Zip Code: <i>{ zipCode }</i></p>
      </div>
      <div className='image-area'>
        <img className='image-product' src={ productImage(produceName) } />
      </div>
    </Link>
  )
}
