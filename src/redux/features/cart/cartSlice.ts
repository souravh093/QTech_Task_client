import type { TCartItem } from "@/types/cart/cart.interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TCartItem[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        state.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    },
    clearCart: () => initialState,
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
