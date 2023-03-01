import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductsThunk = createAsyncThunk(
  'getProductsThunk',
  async (_, { rejectWithValue, getState }) => {
    //const products = getState().products;
    //console.log(products.products);

    try {
      const response = await axios.get("https://fakestoreapi.com/prsdxoducts");

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
