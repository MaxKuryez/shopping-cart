import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loadingReducer, cartReducer, errorsReducer, productsReducer } from './slices';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
