import { combineReducers } from 'redux';
import allListings from './allListings.js'
import productPage from './productPage.js'

const rootReducer = combineReducers({
  allListings,
  productPage
})

export default rootReducer;
