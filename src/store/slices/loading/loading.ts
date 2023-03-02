import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import * as AsyncThunksModule from "store/thunks";
import { RootState } from "store/types";
import { LoadingStateType } from "./types";

const AsyncThunksArray = Object.values(AsyncThunksModule);
type AsyncThunks = (typeof AsyncThunksArray)[number];

const initialState = {
  isLoading: false,
};

const extraReducersBuilder = (
  asyncThunk: AsyncThunks,
  builder: ActionReducerMapBuilder<LoadingStateType>
) => {
  for (const key in asyncThunk) {
    switch (key) {
      case "fulfilled":
        builder.addCase(asyncThunk.fulfilled, (state) => {
          state.isLoading = false;
        });
        break;
      case "rejected":
        builder.addCase(asyncThunk.rejected, (state) => {
          state.isLoading = false;
        });
        break;
      case "pending":
        builder.addCase(asyncThunk.pending, (state) => {
          state.isLoading = true;
        });
        break;
      default:
        break;
    }
  }
};

export const loading = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    AsyncThunksArray.forEach((asyncThunk) => {
      extraReducersBuilder(asyncThunk, builder);
    });
  },
});

export const selectLoadingSlice = (state: RootState) => state.loading;
export default loading.reducer;
