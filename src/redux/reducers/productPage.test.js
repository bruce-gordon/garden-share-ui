import productPage from './productPage.js'
import * as actions from '../actions/actions.js'

describe('productPage reducer', () => {
  it('should return the correct initial state', () => {
    const currentState = undefined
    const action = { type: null }

    const state = productPage(currentState, action)

    expect(state).toEqual({
      productPageData: {},
      error: []
    })
  })

  it('should return the product listing', () => {
    const currentState = undefined
    const action = { type: 'SET_PRODUCT_LISTING' }

    const state = productPage(currentState, action)

    expect(state).toEqual({
      productPageData: action.data,
      error: action.error
    })
  })
})