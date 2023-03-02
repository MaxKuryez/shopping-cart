import { createSlice } from "@reduxjs/toolkit";
import * as AsyncThunksModule from "../../thunks";
import { extractErrorMessage } from "./utils";

const AsyncThunksArray = Object.values(AsyncThunksModule);

const initialState = {
  errorCode: null,
  errorMessage: "",
};

const extraReducersBuilder = (asyncThunk, builder) => {
  for (const key in asyncThunk) {
    switch (key) {
      case "fulfilled":
        builder.addCase(asyncThunk.fulfilled, () => {
          return {
            errorCode: null,
            errorMessage: "",
          };
        });
        break;
      case "rejected":
        builder.addCase(asyncThunk.rejected, (state, { payload }) => {
          if (payload) {
            const errorMessage = payload.response
              ? extractErrorMessage(payload.response.data)
              : payload.message;

            state.errorCode = payload.response ? payload.response.status : "";
            state.errorMessage = errorMessage;
          }
        });
        break;
      case "pending":
        builder.addCase(asyncThunk.pending, (state) => {
          state.errorCode = null;
          state.errorMessage = "";
        });
        break;
      default:
        break;
    }
  }
};

export const errors = createSlice({
  name: "errors",
  initialState,
  reducers: {
    clearError: (state) => {
      state.errorCode = null;
      state.errorMessage = "";
    },
    addError: (state, {payload}) => {
      state.errorMessage = payload.errorMessage;
    }
  },
  extraReducers: (builder) => {
    AsyncThunksArray.forEach((asyncThunk) => extraReducersBuilder(asyncThunk, builder));
  },
});

export const { clearError, addError } = errors.actions;
export const selectErrorsSlice = (state) => state.errors;
export default errors.reducer;
