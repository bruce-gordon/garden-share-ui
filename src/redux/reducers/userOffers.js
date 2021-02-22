const userOffersInitialState = {
  offersList: []
}

const userOffers = (state = userOffersInitialState, action) => {
  switch (action.type) {
    case 'SET_USER_OFFERS':
      return {
        ...state,
        offersList: action.data
      }

    default:
      return state
  }
}

export default userOffers;