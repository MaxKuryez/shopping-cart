import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../constants';

export const getProductsThunk = createAsyncThunk(
  'getProductsThunk',
  async (_, { rejectWithValue, getState }) => {
    //const products = getState().products;
    //console.log(products.products);

    try {
      const response = await axios.get(ENDPOINTS.PRODUCTS);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
