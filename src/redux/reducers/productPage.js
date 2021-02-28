const productPageInitialState = {
  productPageData: {},
  error: []
}

const productPage = (state = productPageInitialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LISTING':
      return {
        productPageData: action.data,
        error: action.error
      }

    default:
      return state
  }
}

export default productPage;
