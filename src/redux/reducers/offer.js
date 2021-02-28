const offerInitialState = {
  offerId: '',
  error: []
}

const offer = (state = offerInitialState, action) => {
  switch (action.type) {
    case 'CREATE_OFFER':
      return {
        offerId: action.offerId,
        error: action.error
      }

    default:
      return state
  }
}

export default offer;
