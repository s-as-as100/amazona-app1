const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
  } = require('../constants/ProductConstants');
  
  const initalState = { loading: true, products: [] }
  export const productListReducer = ( state = initalState, action  ) => {
    console.log("action", action)
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { 
          // ...state,
          loading: false, 
          products: action.payload 
        };
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  