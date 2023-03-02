import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINTS } from "../../constants";

export const getProductsThunk = createAsyncThunk(
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
      return rejectWithValue(error);
    }
  }
);
