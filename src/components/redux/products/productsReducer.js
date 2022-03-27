import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CLEAR_PRODUCTS_LIST,
} from "./productsTypes";

const initialProductsState = {
  loading: false,
  products: [],
  error: "",
};

const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    case CLEAR_PRODUCTS_LIST:
      return {
        ...state,
        loading: false,
        products: [],
        error: "",
      };
    default:
      return state;
  }
};

export default productsReducer;
