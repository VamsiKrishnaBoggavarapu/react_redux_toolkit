import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import loaderSlice from "./slices/loaderSlice";
import productsSlice from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(logger),
  devTools: true,
});
