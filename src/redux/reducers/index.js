import { combineReducers } from 'redux';
import allListings from './allListings.js'
import productPage from './productPage.js'
import userOffers from './userOffers.js'

const rootReducer = combineReducers({
  allListings,
  productPage,
  userOffers
})

export default rootReducer;
