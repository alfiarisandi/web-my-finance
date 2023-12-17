import Header from './Header';
import LatestTransaction from './LatestTransaction';
import BugetPlan from './BugetPlan';
import OutcomeStatistic from './OutcomeStatistic';
import Savings from './Savings';

export default function Index() {
  return (
    <div className="flex flex-1 flex-col gap-3 w-full">
      <Header />
      <div className="flex gap-3 overflow-auto">
        <div className="flex flex-col gap-3">
          <div className="h-[50%]">
            <Savings />
          </div>
          <div className="flex gap-3 overflow-y-auto h-[50%]">
            <LatestTransaction />
          </div>
        </div>
        <div className="">
          <BugetPlan />
          <div className="overflow-y-auto">
            <OutcomeStatistic />
          </div>
        </div>
      </div>
    </div>
  );
}
