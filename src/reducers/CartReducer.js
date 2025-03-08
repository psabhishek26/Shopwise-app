import { cartActionTypes } from "../contants/ActionTypes";

const initialState = {
  cart: {},
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.GET_CART_ITEMS:
      return { ...state, cart: action?.payload };
    case cartActionTypes.SET_IS_LOADING:
      return { ...state, isLoading: action?.payload };
    default:
      return state;
  }
};
