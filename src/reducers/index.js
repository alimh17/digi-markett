import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";
import { orderingReducer } from "./ordering";
import { product } from "./product";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  product,
  ordering: orderingReducer,
});

export default rootReducer;
