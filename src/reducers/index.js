import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
});

export default rootReducer;
