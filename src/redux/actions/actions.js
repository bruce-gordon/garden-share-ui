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

export const updateProductPageData = (id) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      query {
        showListing(id: ${id}) {
          listing {
            user {
              firstName
            }
            produceName
            produceType
            description
            quantity
            unit
            dateHarvested
            zipCode
            status
            createdAt
          }
          error
        }}`
    }})
      .then(response => {
        if (response.status === 200) {
          dispatch ({
            type: 'SET_PRODUCT_LISTING',
            data: response.data.data.showListing.listing,
            error: response.data.data.showListing.error
          })
        } else {
          console.error(response)
        }
      })
  }
}

export const createOffer = (listingId, userId, offer) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      mutation {
        createOffer (input: {
          userId: ${userId},
          listingId: ${listingId},
          produceName: "${offer.itemName}",
          produceType: "${offer.itemType}",
          description: "${offer.description}",
          quantity: ${offer.quantity},
          unit: "${offer.unit}",
          dateHarvested: "${offer.date}"}) {
            offer {
              id
              produceName
              produceType
            }
            error
          }
        }`
    }})
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        dispatch ({
          type: 'CREATE_OFFER',
          offerId: response.data.data.createOffer.offer.id,
          name: response.data.data.createOffer.offer.produceName,
          produceType: response.data.data.createOffer.offer.produceType,
          error: response.data.data.createOffer.error
        })
      } else {
        console.error(response)
      }
    })
  }
}

export const updateUserOffers = (userId, data) => ({
  type: 'SET_USER_OFFERS',
  data
})

export const updateUserListings = (userId, data) => ({
  type: 'SET_USER_LISTINGS',
  data
})

export const loginUser = (user, isAuthenticated) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      mutation {
        createUser (input: {firstName: "${user.given_name}", lastName: "${user.family_name}", email: "${user.email} "}) {
          user {
            id
            firstName
            lastName
            email
          }
        error
      }
    }`
    }})
    .then(response => {
      if (response.status === 200) {
        dispatch ({
          type: 'LOGIN_USER',
          user: response.data.data.createUser.user,
          isAuthenticated: isAuthenticated,
          error: response.data.data.createUser.error
        })
      } else {
        console.error(response)
      }
    })
  }
}
