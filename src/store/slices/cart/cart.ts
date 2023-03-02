import { createSlice } from "@reduxjs/toolkit";
import { addToCartThunk } from "store/thunks";
import { RootState } from "store/types";
import { CartProducts } from "./types"; 

const initialState = {
  products: {} as CartProducts,
  totalCost: 0,
  numberItems: 0,
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeProduct: (state, { payload }) => {
      const { price, quantity } = state.products[payload];

      delete state.products[payload];

      state.totalCost = Number(state.totalCost) - Number(price * quantity);
      state.totalCost = Number(state.totalCost.toFixed(2));
      state.numberItems -= quantity;
    },
    changeQuantity: (state, { payload }) => {
      const { id, quantity, price } = payload;

      const prevQuantity = state.products[id].quantity;
      state.products[id].quantity = quantity;

      state.totalCost =
        Number(state.totalCost) - Number(price * prevQuantity) +
        Number(price * quantity);
        state.totalCost = Number(state.totalCost.toFixed(2));
      state.numberItems += quantity - prevQuantity;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartThunk.fulfilled, (state, { payload }) => {
        const { id, price } = payload;

        if (state.products[id]) {
          state.products[id].quantity += 1;
        } else {
          state.products[id] = { ...payload, quantity: 1 };
        }

        state.totalCost = Number(state.totalCost) + Number(price);
        state.totalCost = Number(state.totalCost.toFixed(2));
        state.numberItems += 1;
      })
  },
});

export const { removeProduct, changeQuantity } = cart.actions;
export const selectCartSlice = (state: RootState) => state.cart;
export default cart.reducer;
