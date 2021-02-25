const userInitialState = {
  user: {},
  isAuthenticated: false
}

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.user,
        isAuthenticated: action.isAuthenticated
      }
    default:
      return state
  }
}

export default user;