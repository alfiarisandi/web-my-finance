import SkeletonCard from '@component/skeleton/SkeletonCard';
import useDashboard from '../hooks/useDashboard';
import Cards from './Cards';
import LatestTransaction from './LatestTransaction';
import OutcomeStatistic from './OutcomeStatistic';
import Savings from './Savings';

export default function Index() {
  const useDashboards = useDashboard();
  return useDashboards.loading ? (
    <div className="flex gap-3 w-full h-full">
      <div className="flex flex-col gap-3 w-full h-full">
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="flex flex-col gap-3 w-full h-full">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  ) : (
    <div className="flex gap-3 overflow-auto">
      <div className="flex flex-col gap-3 w-[60%]">
        <div className="h-fit">
          <Savings
            data={useDashboards.dataDasboard?.data?.savings}
            totalBalance={useDashboards.dataDasboard?.data?.actual_balance}
          />
        </div>
        <div className="flex gap-3 overflow-y-auto h-[40%]">
          <LatestTransaction
            data={useDashboards.dataDasboard?.data?.transaksi}
          />
        </div>
      </div>
      <div className="w-[45%] flex flex-col gap-3">
        <div className="overflow-y-auto">
          <Cards data={useDashboards.dataDasboard?.data?.buget_plan} />
        </div>
        <OutcomeStatistic data={useDashboards.dataDasboard?.data?.buget_plan} />
      </div>
    </div>
  );
}
