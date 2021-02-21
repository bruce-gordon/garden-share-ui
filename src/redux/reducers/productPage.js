const productPageInitialState = {
  productPageData: {}
}

const productPage = (state = productPageInitialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_LISTING':
      return {
        productPageData: action.data
      }

    default:
      return state
  }
}

export default productPage;
