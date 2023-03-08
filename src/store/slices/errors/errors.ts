import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import * as AsyncThunksModule from "store/thunks";
import { extractErrorMessage } from "./utils";
import { AxiosError } from "axios";
import { RootState } from "store/types";
import { ErrorStateType } from "./types";  

const AsyncThunksArray = Object.values(AsyncThunksModule);
type AsyncThunks = (typeof AsyncThunksArray)[number];

const initialState: ErrorStateType = {
  errorCode: null,
  errorMessage: "",
};

const extraReducersBuilder = (asyncThunk: AsyncThunks, builder: ActionReducerMapBuilder<ErrorStateType>) => {
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
        builder.addCase(asyncThunk.rejected, (state, { payload } ) => {
          if (!payload) return;
          if (payload instanceof AxiosError) {
            console.log(payload);
            const errorMessage = !payload.response
              ? payload.message
              : typeof payload.response.data === "string"
                ? extractErrorMessage(payload.response.data)
                : payload.response.data.message;

            state.errorCode = payload.response ? payload.response.status : null;
            state.errorMessage = errorMessage;
          } else {
            state.errorMessage = payload.message;
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
export const selectErrorsSlice = (state: RootState) => state.errors;
export default errors.reducer;
