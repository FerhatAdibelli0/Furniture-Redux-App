import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../redux/ui";
import cartSlice from "../redux/cart";

export const cartSliceActions = cartSlice.actions;

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice },
});

export default store;
