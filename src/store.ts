import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./control/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Bu, Redux durumunun tipini belirlemek için kullanılır.
export type RootState = ReturnType<typeof store.getState>;
