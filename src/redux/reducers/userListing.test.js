import userListings from './userListings.js'
import * as actions from '../actions/actions.js'

describe('userListings reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = userListings(currentState, action)

    expect(state).toEqual({
      listings: [],
      newListing: {},
      error: []
    })
  })

  it('should be able to create a listing', () => {
    const currentState = undefined
    const action = { type: 'CREATE_LISTING' }

    const state = userListings(currentState, action)

    expect(state).toEqual({
      listings: [],
      newListing: action.data,
      error: action.error
    })
  })

  it('should be able to get a user\'s listings', () => {
    const currentState = undefined
    const action = { type: 'GET_USER_LISTINGS' }

    const state = userListings(currentState, action)

    expect(state).toEqual({
      listings: action.data,
      newListing: {},
      error: action.error
    })
  })

  it('should be able to accept an offer', () => {
    const currentState = undefined
    const action = { type: 'ACCEPT_OFFER' }

    const state = userListings(currentState, action)

    expect(state).toEqual({
      listings: action.data,
      error: action.error,
      newListing: {}
    })
  })

  it('should be able to decline an offer', () => {
    const currentState = undefined
    const action = { type: 'DECLINE_OFFER' }

    const state = userListings(currentState, action)

    expect(state).toEqual({
      listings: action.data,
      error: action.error,
      newListing: {}
    })
  })
})