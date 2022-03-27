import axios from "axios";

import {
  FETCH_PRODUCTDETAILS_REQUEST,
  FETCH_PRODUCTDETAILS_SUCCESS,
  FETCH_PRODUCTDETAILS_FAILURE,
  CLEAR_PRODUCTDETAILS,
} from "./productDetailsTypes";

export const fetchProductDetailsRequest = () => {
  return {
    type: FETCH_PRODUCTDETAILS_REQUEST,
  };
};
export const fetchProductDetailsSuccess = (productDetails) => {
  return {
    type: FETCH_PRODUCTDETAILS_SUCCESS,
    payload: productDetails,
  };
};
export const fetchProductDetailsFailure = (error) => {
  return {
    type: FETCH_PRODUCTDETAILS_FAILURE,
    payload: error,
  };
};
export const clearProductDetails = () => {
  return {
    type: CLEAR_PRODUCTDETAILS,
  };
};

//Async API Call
export const fetchProductDetails = (productId) => {
  return function (dispatch) {
    dispatch(fetchProductDetailsRequest());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductDetailsSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchProductDetailsFailure(err.message));
      });
  };
};
