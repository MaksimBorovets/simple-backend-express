import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { counterApi } from './services/counter';

export const store = configureStore({
  reducer: {
    [counterApi.reducerPath]: counterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(counterApi.middleware),
});
