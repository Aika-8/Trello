import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./slices/cardSlice";
import columSlice from "./slices/columSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    addColumn: columSlice,
    addCard: cardSlice,
    signUp: authSlice,
  },
});
