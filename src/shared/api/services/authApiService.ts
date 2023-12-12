import { apiBaseUrl } from '@api/apiBaseurlSlice';
import { IResponseDataDetail } from '@interfaces/responseTypes';

export const authApiService = apiBaseUrl.injectEndpoints({
  endpoints: (builder) => ({
    authLogin: builder.mutation<IResponseDataDetail, object>({
      query: (formBody) => ({
        url: `auth/login`,
        method: 'POST',
        body: formBody,
      }),
    }),
  }),
});

export const { useAuthLoginMutation } = authApiService;
