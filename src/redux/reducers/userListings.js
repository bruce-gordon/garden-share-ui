const userListingsInitialState = {
  listings: [],
  error: ''
}

const userListings = (state = userListingsInitialState, action) => {
  switch (action.type) {
    case 'SET_USER_LISTINGS':
      return {
        ...state,
        listings: action.data,
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