import { createSlice } from '@reduxjs/toolkit';
import * as AsyncThunksModule from '../../thunks';

const AsyncThunksArray = Object.values(AsyncThunksModule);

const extraReducersBuilder = (
  asyncThunk,
  builder
) => {
  for (const key in asyncThunk) {
    switch (key) {
      case 'fulfilled':
        builder.addCase(asyncThunk.fulfilled, (state) => {
          state.isLoading = false;
        });
        break;
      case 'rejected':
        builder.addCase(asyncThunk.rejected, (state) => {
          state.isLoading = false;
        });
        break;
      case 'pending':
        builder.addCase(asyncThunk.pending, (state) => {
          state.isLoading = true;
        });
        break;
    }
  }
};

const initialState = {
  isLoading: false,
};

export const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    AsyncThunksArray.forEach((asyncThunk) => {
      extraReducersBuilder(asyncThunk, builder);
    });
  },
});

export const {} = loading.actions;
export const selectLoadingSlice = (state) => state.loading;
export default loading.reducer;
