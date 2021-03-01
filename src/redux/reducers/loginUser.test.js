import user from './loginUser.js'
import * as actions from '../actions/actions.js'

describe('user reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = user(currentState, action)
    
    expect(state).toEqual({
      user: {},
      isAuthenticated: false,
      error: []
    })
  })

  it('show have user information', () => {
    const currentState = {}

    const action = { type: 'LOGIN_USER' }

    const state = user(currentState, action)

    expect(state).toEqual({ user: action.user, isAuthenticated: action.isAuthenticated, error: action.error })
  })
})