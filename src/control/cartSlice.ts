import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import courseItems from "../courseItems";
export interface CourseItems {
  id: string;
  title: string;
  price: number; // Tipik olarak fiyat için `number` kullanılır, ama burada `string` olarak bırakılmış.
  img: string;
  quantity: number;
}
interface CartItem {
  id: string;
  title: string;
  price: number; // Tipik olarak fiyat için `number` kullanılır, ama burada `string` olarak bırakılmış.
  img: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  cartItems: courseItems.map((item: CartItem) => ({
    id: item.id,
    title: item.title,
    price: item.price, // Fiyatları `number` olarak kullanmak için `parseFloat` yapıldı
    quantity: item.quantity,
    img: item.img,
  })),
  quantity: courseItems.reduce((total, item) => total + item.quantity, 0), // Toplam adet hesaplandı
  total: courseItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ), // Toplam fiyat hesaplandı
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.quantity -= state.cartItems[index].quantity;
        state.total -=
          state.cartItems[index].price * state.cartItems[index].quantity;
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
