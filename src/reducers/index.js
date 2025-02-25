import { combineReducers } from "@reduxjs/toolkit";

import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
});
