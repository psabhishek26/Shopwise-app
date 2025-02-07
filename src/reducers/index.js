import { combineReducers } from "@reduxjs/toolkit";

import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";
import BookmarkReducer from "./BookmarkReducer";

export default combineReducers({
  generalState: GeneralReducer,
  cartState: CartReducer,
  bookmarkState: BookmarkReducer,
});
