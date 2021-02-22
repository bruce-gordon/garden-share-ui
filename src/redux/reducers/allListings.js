const allListingsInitialState = {
  listingData: []
}

const allListings = (state = allListingsInitialState, action) => {
  switch (action.type) {
    case 'SET_LISTING_DATA':
      return {
        ...state,
        listingData: action.data
      }

    default:
      return state
  }
}

export default allListings;
