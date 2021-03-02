import offer from './offer.js'
import * as actions from '../actions/actions.js'

describe('offer reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = offer(currentState, action)

    expect(state).toEqual({error: [], offerId: "", produceName: "", produceType: ""})
  })

  it('should be able to add an offer to state', () => {
    const currentState = {}
    const action = { type: 'CREATE_OFFER' }

    const state = offer(currentState, action)

    expect(state).toEqual({
      offerId: action.offerId,
      produceName: action.name,
      produceType: action.produceType,
      error: action.error
    })
  })
})