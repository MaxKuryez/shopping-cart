import { createAsyncThunk } from "@reduxjs/toolkit";
import { MAX_PRODUCTS, MAX_PRODUCTS_OF_SAME_TYPE } from "utils";
import { Product } from "types";
import { AsyncThunkConfig } from "./types";

// Added as a thunk to be able to check for errors and in case the action is forbidden,
// create an error which will be handled by error slice.
export const addToCartThunk = createAsyncThunk<Product, Product, AsyncThunkConfig>(
  "addToCart",
  async (product, { rejectWithValue, getState }) => {
    const cart = getState().cart;

    if (cart.products && cart.products[product.id] && cart.products[product.id].quantity >= MAX_PRODUCTS_OF_SAME_TYPE) {
      return rejectWithValue({
        message: `You cannot add more than ${MAX_PRODUCTS_OF_SAME_TYPE} products of the same type.`,
      });
    }

    const keysArray = Object.keys(cart.products);

    if (cart.products && keysArray.length >= MAX_PRODUCTS && !keysArray.includes(product.id.toString())) {
      return rejectWithValue({
        message: `You cannot add more than ${MAX_PRODUCTS} types of products.`,
      });
    }

    return product;
  }
);
