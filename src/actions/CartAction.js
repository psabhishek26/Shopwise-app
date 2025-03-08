import { cartActionTypes } from "../contants/ActionTypes";
import { CartService } from "../services";

const addToCart = ({ itemId }) => {
  return (dispatch) => {
    dispatch({
      type: cartActionTypes.SET_IS_LOADING,
      payload: true,
    });
    CartService.addToCart({ itemId })
      .then((cartResponse) => {
        dispatch({
          type: cartActionTypes.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const removeFromCart = ({ itemId }) => {
  return (dispatch) => {
    dispatch({
      type: cartActionTypes.SET_IS_LOADING,
      payload: true,
    });
    CartService.removeFromCart({ itemId })
      .then((cartResponse) => {
        dispatch({
          type: cartActionTypes.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const getCartItems = () => {
  return (dispatch) => {
    dispatch({
      type: cartActionTypes.SET_IS_LOADING,
      payload: true,
    });
    CartService.getCartItems()
      .then((cartResponse) => {
        dispatch({
          type: cartActionTypes.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: cartActionTypes.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

export default { addToCart, removeFromCart, getCartItems };
