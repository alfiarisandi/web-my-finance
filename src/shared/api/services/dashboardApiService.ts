import { apiBaseUrl } from '@api/apiBaseurlSlice';
import { IDashboard } from '@interfaces/dashboardTypes';
import { IResponseData } from '@interfaces/responseTypes';

export const dashboardApiService = apiBaseUrl.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<IResponseData<IDashboard>, void>({
      query: () => `dashboard`,
    }),
  }),
});

export const { useGetDashboardQuery } = dashboardApiService;
