const allListingsInitialState = {
  listingData: [],
  error: null
}

const allListings = (state = allListingsInitialState, action) => {
  switch (action.type) {
    case 'SET_LISTING_DATA':
      return {
        listingData: action.data,
        error: action.error
      }

    default:
      return state
  }
}

export default allListings;
