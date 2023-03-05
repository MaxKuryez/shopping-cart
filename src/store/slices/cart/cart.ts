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
        const { product, quantity } = payload;

        if (state.products[product.id]) {
          state.products[product.id].quantity += quantity;
        } else {
          state.products[product.id] = { ...product, quantity: quantity };
        }

        state.totalCost = Number(state.totalCost) + (Number(product.price) * Number(quantity));
        state.totalCost = Number(state.totalCost.toFixed(2));
        state.numberItems += Number(quantity);
      })
  },
});

export const { removeProduct, changeQuantity } = cart.actions;
export const selectCartSlice = (state: RootState) => state.cart;
export default cart.reducer;
