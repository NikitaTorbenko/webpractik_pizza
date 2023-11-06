import { configureStore } from '@reduxjs/toolkit';
import { pizzasApi } from './api/pizzasApi';

export const store = configureStore({
  reducer: {
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pizzasApi.middleware),
});
