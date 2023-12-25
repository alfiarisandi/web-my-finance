import { useGetDashboardQuery } from '@api/services/dashboardApiService';
import { useEffect } from 'react';

export default function useDashboard() {
  const {
    data: dataDasboard,
    isFetching: loading,
    refetch,
  } = useGetDashboardQuery();

  useEffect(() => {
    async function fetch() {
      refetch();
    }
    fetch();
  }, []);
  return {
    dataDasboard,
    loading,
  };
}
