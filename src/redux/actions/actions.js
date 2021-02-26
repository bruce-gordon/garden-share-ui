import axios from 'axios'
import { query } from 'gql-query-builder'

// export const updateListingData = (data) => ({
//   type: 'SET_LISTING_DATA',
//   data
// })

export const updateListingData = () => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    return axios.post(`${proxyUrl}https://garden-share-be.herokuapp.com/graphql`, query({
      operation: 'getListings',
      fields: ['listings', 'error']
    }))
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: 'SET_LISTING_DATA',
          data: response.data.data.getListings.listings,
          error: response.data.data.getListings.error
        })
      } else {
        console.error(response)
      }
    })
  }
}

export const updateProductPageData = (id, data) => ({
  type: 'SET_PRODUCT_LISTING',
  data
})

//data being used for mock data
export const updateUserOffers = (userId, data) => ({
  type: 'SET_USER_OFFERS',
  data
})

export const updateUserListings = (userId, data) => ({
  type: 'SET_USER_LISTINGS',
  data
})

export const loginUser = (user, isAuthenticated) => ({
  type: 'LOGIN_USER',
  user,
  isAuthenticated
})
