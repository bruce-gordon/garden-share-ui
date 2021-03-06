import axios from 'axios'
import { query } from 'gql-query-builder'

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

export const createListing = (userId, listing) => {
  console.log(userId, listing)
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query:
        `mutation {
          createListing(input: {
          userId: ${userId},
          zipCode: "80206",
          produceName: "${listing.itemName}",
          produceType: "${listing.itemType}",
          description: "${listing.description}",
          quantity: ${listing.quantity},
          unit: "${listing.unit}",
          dateHarvested: "${listing.date}"}) {
            listing {
              id
              zipCode
              produceName
              produceType
              description
              quantity
              unit
              dateHarvested
              createdAt
            }
            error
          }
        }`
    }
    })
    .then(response => {
      console.log(response)
      if (response.status === 200) {
        dispatch({
          type: "CREATE_LISTING",
          data: response.data.data.createListing.listing,
          error: response.data.data.createListing.error
        })
      } else {
        console.error(response)
      }
    })
  }
}

export const clearNewListings = () => {
  return dispatch => {
    dispatch ({
      type: 'CLEAR_NEW'
    })
  }
}

export const clearOffer = () => {
  return dispatch => {
    dispatch ({
      type: 'CLEAR_OFFER'
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

export const updateUserOffers = (userId) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      query {
        getUserOffers(id: ${userId}) {
          listings {
            id
            produceName
            produceType
            quantity
            unit
            status
            dateHarvested
            updatedAt
            user {
              id
              firstName
            }
            offers {
              id
              produceName
              produceType
              quantity
              unit
              status
              dateHarvested
              updatedAt
              user {
                id
                firstName
              }
            }
          }
          error
        }
      }`
    }})
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: 'SET_USER_OFFERS',
          data: response.data.data.getUserOffers.listings,
          error: response.data.data.getUserOffers.error
        })
      } else {
        console.error(response)
      }
    })
  }
}

export const updateUserListings = (userId) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({ url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query:`
        query {
          getUserListings(id: ${userId}) {
            listings {
              id
              user {
                firstName
                id
              }
              produceName
              produceType
              description
              quantity
              unit
              zipCode
              status
              updatedAt
              offers {
                id
                user {
                  id
                  firstName
                  lastName
                  email
                }
                produceName
                produceType
                description
                quantity
                unit
                status
                updatedAt
              }
            }
            error
          }
      }`
    }
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: 'GET_USER_LISTINGS',
          data: response.data.data.getUserListings.listings,
          error: response.data.data.getUserListings.error
        })
      }
    })
  }
}

export const loginUser = (user, isAuthenticated) => {
  return dispatch => {
    // const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    // axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    axios({url: `https://garden-share-be.herokuapp.com/graphql`,
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

export const acceptUserOffer = (offerId, userId) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      mutation {
        acceptOffer(input: {
          id: ${offerId}}) {
          listing {
            user {
              id
            }
            id
            status
            offers {
              id
              status
            }
          }
          error
        }
      }`
    }})
    .then(() => {
      dispatch(updateUserListings(userId))
    })
  }
}

export const declineUserOffer = (offerId, userId) => {
  return dispatch => {
    const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
    axios({url: `${proxyUrl}https://garden-share-be.herokuapp.com/graphql`,
    method: 'post',
    data: {
      query: `
      mutation {
        declineOffer(input: {
          id: ${offerId}}) {
          listing {
            id
            status
            offers {
              id
              status
            }
          }
          error
        }
      }`
    }})
    .then(() => {
      dispatch(updateUserListings(userId))
    })
  }
}
