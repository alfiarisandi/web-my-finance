import { apiBaseUrl } from '@api/apiBaseurlSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [apiBaseUrl.reducerPath]: apiBaseUrl.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBaseUrl.middleware),
});

setupListeners(store.dispatch);
