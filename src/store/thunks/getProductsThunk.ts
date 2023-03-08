import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "utils";
import { Product } from "types";
import { AsyncThunkConfig } from "./types";

export const getProductsThunk = createAsyncThunk<Product[], undefined, AsyncThunkConfig>(
  "getProductsThunk",
  async (_, { rejectWithValue, getState }) => {
    const products = getState().products;

    // return products from state to not fetch api again
    if (products.products.length) {
      return products.products;
    }

    try {
      const response = await axios.get(ENDPOINTS.PRODUCTS);

      return response.data;
    } catch (error) {
      return rejectWithValue(error as AxiosError);
    }
  }
);
