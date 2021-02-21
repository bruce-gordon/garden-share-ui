import React from 'react'
import './ProductCard.scss'
import { Link } from "react-router-dom"

export default function ProductCard({ id, produceName, type, quantity, unit, zipCode }) {

  return (
    <div className='productCard'>
      <Link to={`/listing/${id}`}>
        <h3 className='cardHeader'>{ produceName }</h3>
        <p>Type: <i>{ type }</i></p>
        <p>{ quantity } { unit }</p>
        <p>Zip Code: { zipCode }</p>
      </Link>
    </div>
  )
}
