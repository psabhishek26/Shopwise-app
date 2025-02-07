import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: __DEV__,
});

const getToken = () => store?.getState()?.generalState?.token;

export { store, getToken };
