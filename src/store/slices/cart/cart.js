import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      if (state.products[payload.id]) {
        state.products[payload.id].quantity += 1;
      } else {
        state.products[payload.id] = { ...payload, quantity: 1 };
      }
    },
  },
});

export const { addProduct } = cart.actions;
export const selectCartSlice = (state) => state.cart;
export default cart.reducer;
