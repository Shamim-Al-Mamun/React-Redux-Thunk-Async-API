import { combineReducers } from "redux";

import productsReducer from "./products/productsReducer";
import productDetailsReducer from "./productsDetails/productDetailsReducer";

const rootReducer = combineReducers({
  product: productsReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
