const offerInitialState = {
  offerId: '',
  produceName: '',
  produceType: '',
  error: []
}

const offer = (state = offerInitialState, action) => {
  switch (action.type) {
    case 'CREATE_OFFER':
      return {
        offerId: action.offerId,
        produceName: action.name,
        produceType: action.produceType,
        error: action.error
      }

    default:
      return state
  }
}

export default offer;
