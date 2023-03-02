// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from 'store/types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
