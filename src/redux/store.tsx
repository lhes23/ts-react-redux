import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./slices/ProductSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    productSlice: productSliceReducer,
  },
});
