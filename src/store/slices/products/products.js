import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk } from '../../thunks';

const initialState = {
  products: [],
};

export const products = createSlice({
  name: 'productsSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.fulfilled, (state, { payload }) => {
        if (!Array.isArray(payload)) return;
        state.products = payload;
      })
  },
});

export const selectProductsSlice = (state) => state.products;
export default products.reducer;
