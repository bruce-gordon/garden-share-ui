import allListings from './allListings.js'
import * as actions from '../actions/actions.js'

describe('allListings reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = allListings(currentState, action)

    expect(state).toEqual({  
      listingData: [],
      error: null
    })
  })

  it('should update the listing data', () => {
    const currentState = []

    const action = { type: 'SET_LISTING_DATA'}
    const state = allListings(currentState, action)
    
    expect(state).toEqual({ listingData: action.data, error: action.error })
  })
})