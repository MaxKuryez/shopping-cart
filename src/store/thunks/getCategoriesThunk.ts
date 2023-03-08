import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ENDPOINTS } from "utils";
import { AsyncThunkConfig } from "./types";

export const getCategoriesThunk = createAsyncThunk<string[], undefined, AsyncThunkConfig>(
  "getCategoriesThunk",
  async (_, { rejectWithValue, getState }) => {
    const products = getState().products;

    // return products from state to not fetch api again
    if (products.categories.length) {
      return products.categories;
    }

    try {
      const response = await axios.get(ENDPOINTS.CATEGORIES);

      return response.data;
    } catch (error) {
      return rejectWithValue(error as AxiosError);
    }
  }
);
