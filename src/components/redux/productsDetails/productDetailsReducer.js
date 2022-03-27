import {
  FETCH_PRODUCTDETAILS_REQUEST,
  FETCH_PRODUCTDETAILS_SUCCESS,
  FETCH_PRODUCTDETAILS_FAILURE,
  CLEAR_PRODUCTDETAILS,
} from "./productDetailsTypes";

const initialProductDetailsState = {
  loading: false,
  productDetails: [],
  error: "",
};

const productDetailsReducer = (state = initialProductDetailsState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
        error: "",
      };
    case FETCH_PRODUCTDETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        productDetails: [],
        error: action.payload,
      };
    case CLEAR_PRODUCTDETAILS:
      return {
        ...state,
        loading: false,
        productDetails: [],
        error: "",
      };
    default:
      return state;
  }
};

export default productDetailsReducer;
