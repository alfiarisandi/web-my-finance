import { apiBaseUrl } from '@api/apiBaseurlSlice';

export const authApiService = apiBaseUrl.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (formBody) => ({
        url: `auth/login`,
        method: 'POST',
        body: formBody,
      }),
    }),
  }),
});

export const { useAuthLoginMutation } = authApiService;
