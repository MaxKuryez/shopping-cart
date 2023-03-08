import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk, getCategoriesThunk } from "store/thunks";
import { RootState } from "store/types";
import { Product } from "types";

const initialState = {
  products: [] as Product[],
  categories: [] as string[],
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
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        if (!Array.isArray(payload)) return;
        state.categories = payload;
      })
  },
});

export const selectProductsSlice = (state: RootState) => state.products;
export default products.reducer;
