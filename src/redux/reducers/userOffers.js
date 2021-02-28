const userOffersInitialState = {
  offersList: [],
  error: []
}

const userOffers = (state = userOffersInitialState, action) => {
  switch (action.type) {
    case 'SET_USER_OFFERS':
      return {
        offersList: action.data,
        error: action.error
      }
    default:
      return state
  }
}

export default userOffers;
