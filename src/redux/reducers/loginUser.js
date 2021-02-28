const userInitialState = {
  user: {},
  isAuthenticated: false,
  error: []
}

const user = (state = userInitialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        user: action.user,
        isAuthenticated: action.isAuthenticated,
        error: action.error
      }

    default:
      return state
  }
}

export default user;
