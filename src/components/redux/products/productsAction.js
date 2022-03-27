import axios from "axios";

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  CLEAR_PRODUCTS_LIST,
} from "./productsTypes";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};
export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};
export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};
export const clearProductList = () => {
  return {
    type: CLEAR_PRODUCTS_LIST,
  };
};

//Async API Call
export const fetchProducts = () => {
  return function (dispatch) {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchProductsFailure(err.message));
      });
  };
};
