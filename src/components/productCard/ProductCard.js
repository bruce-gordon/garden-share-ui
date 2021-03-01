import React from 'react'
import './ProductCard.scss'
import { Link } from "react-router-dom"

export default function ProductCard({ id, produceName, type, quantity, unit, zipCode }) {

  return (
    <div className='productCard' data-testid='productCard'>
      <Link className='product-text' to={`/listing/${id}`}>
        <h3 className='cardHeader product-text'>{ produceName }</h3>
        <p className='product-text'>Type: <i>{ type }</i></p>
        <p className='product-text'><i>{ quantity } { unit }</i></p>
        <p className='product-text'>Zip Code: <i>{ zipCode }</i></p>
      </Link>
    </div>
  )
}
