import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";
import { product } from "./product";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  product,
});

export default rootReducer;
