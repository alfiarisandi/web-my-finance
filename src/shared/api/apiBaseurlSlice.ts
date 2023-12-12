// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configEnv } from '@utils/configEnv';
import Cookies from 'js-cookie';

// Define a service using a base URL and expected endpoints
export const apiBaseUrl = createApi({
  reducerPath: 'apiBaseUrl',
  baseQuery: fetchBaseQuery({
    baseUrl: configEnv.apiBaseUrl,
    headers: {
      Authorization: `Bearer ${JSON.parse(Cookies.get('token') || '{}')}`,
    },
  }),
  endpoints: () => ({}),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
// eslint-disable-next-line
export const {} = apiBaseUrl;
