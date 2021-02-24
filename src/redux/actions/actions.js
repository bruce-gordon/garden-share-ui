export const updateListingData = (data) => ({
  type: 'SET_LISTING_DATA',
  data
})

export const updateProductPageData = (id, data) => ({
  type: 'SET_PRODUCT_LISTING',
  data
})

//data being used for mock data
export const updateUserOffers = (userId, data) => ({
  type: 'SET_USER_OFFERS',
  data
})

export const updateUserListings = (userId, data) => ({
  type: 'SET_USER_LISTINGS',
  data
})
