import { combineReducers } from 'redux';
import allListings from './allListings.js'
import productPage from './productPage.js'
import userOffers from './userOffers.js'
import userListings from './userListings.js'
import user from './loginUser.js'
import offer from './offer.js'

const rootReducer = combineReducers({
  allListings,
  productPage,
  userOffers,
  userListings,
  user,
  offer
})

export default rootReducer;
