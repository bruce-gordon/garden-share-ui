const userListingsInitialState = {
  listings: [],
  error: []
}

const userListings = (state = userListingsInitialState, action) => {
  switch (action.type) {
    case 'CREATE_LISTING':
      return {
        listings: action.data,
        error: action.error
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

export default userListings;