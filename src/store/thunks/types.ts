import { RootState } from "store/types";
import { AxiosError } from "axios";

export interface ProductError {
  message: string;
}

export interface AsyncThunkConfig { rejectValue: AxiosError | ProductError; state: RootState };
