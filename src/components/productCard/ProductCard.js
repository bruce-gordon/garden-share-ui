import React from 'react'
import './ProductCard.scss'

export default function ProductCard({ produceName, type, quantity, unit, zipCode }) {
  return (
    <div className='productCard'>
      <h3 className='cardHeader'>{ produceName }</h3>
      <p>Type: <i>{ type }</i></p>
      <p>{ quantity } { unit }</p>
      <p>Zip Code: { zipCode }</p>
    </div>
  )
}
