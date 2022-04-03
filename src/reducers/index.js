import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";
import { cartReducer } from "./cart";
import { loading } from "./loading";
import { mobilesReducer } from "./mobiles";
import { orderingReducer } from "./ordering";
import { product } from "./product";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  product,
  ordering: orderingReducer,
  mobiles: mobilesReducer,
  cart: cartReducer,
  loading,
});

export default rootReducer;
