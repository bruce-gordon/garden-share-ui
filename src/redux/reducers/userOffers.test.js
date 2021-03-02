import userOffers from './userOffers.js'
import * as actions from '../actions/actions.js'

describe('userOffers reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = userOffers(currentState, action)

    expect(state).toEqual({
      offersList: [],
      error: []
    })
  })

  it('should return the user offers', () => {
    const currentState = undefined
    const action = { type: 'SET_USER_OFFERS' }

    const state = userOffers(currentState, action)

    expect(state).toEqual({
      offersList: action.data,
      error: action.error
    })
  })
})