import { useDispatch } from "react-redux";
import { AppDispatch } from "store/types";

type TypedDispatchFunc = () => AppDispatch;
export const useTypedDispatch: TypedDispatchFunc = useDispatch;
