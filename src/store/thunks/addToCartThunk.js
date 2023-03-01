import { createAsyncThunk } from '@reduxjs/toolkit';
import { MAX_PRODUCTS, MAX_PRODUCTS_OF_SAME_TYPE } from '../../constants';

export const addToCartThunk = createAsyncThunk(
  'addToCart',
  async (product, { rejectWithValue, getState }) => {
    const cart = getState().cart;

    if (cart.products && cart.products[product.id] && cart.products[product.id].quantity >= MAX_PRODUCTS_OF_SAME_TYPE) {
      return rejectWithValue({
        message: `You cannot add more than ${MAX_PRODUCTS_OF_SAME_TYPE} products of the same type.`,
      });
    }

    if (cart.products && Object.keys(cart.products).length >= MAX_PRODUCTS) {
      return rejectWithValue({
        message: `You cannot add more than ${MAX_PRODUCTS} types of products.`,
      });
    }

    return product;
  }
);
