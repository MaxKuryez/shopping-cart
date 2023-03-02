import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "store/thunks";
import { RootState } from "store/types";
import { Product } from "types";

const initialState = {
  products: [] as Product[],
};

export const products = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        if (!Array.isArray(payload)) return;
        state.products = payload;
      })
  },
});

export const selectProductsSlice = (state: RootState) => state.products;
export default products.reducer;
