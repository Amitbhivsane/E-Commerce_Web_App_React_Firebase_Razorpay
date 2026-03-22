import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      // ✅ FIX: convert Timestamp → number
      const safeItem = {
        ...item,
        time: item.time?.toMillis
          ? item.time.toMillis()
          : item.time || Date.now(),
      };

      state.push(safeItem);

      // ✅ persist to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteFromCart(state, action) {
      state.splice(action.payload, 1);

      // ✅ update localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;