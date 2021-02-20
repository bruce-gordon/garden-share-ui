import React, { useState, useEffect } from 'react'
import mockData from '../productContainer/mockData'

export default function HomePage() {
  const [listingData, setListingData] = useState([])
  const [sortedListings, setSortedListings] = useState([])

  useEffect(() => {
    setListingData(mockData.data.getListings)
  })

  const sortData = (products) => {
    products.reduce((sortedData, product) => {
      
    }, [])
  }

  return (
    <div>
      <h2>Available Produce In Your Area</h2>
    </div>
  )
}
