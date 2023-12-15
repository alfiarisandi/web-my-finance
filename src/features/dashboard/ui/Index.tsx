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
        <div className="flex flex-col gap-3 w-[60%]">
          <div className="h-[60%]">
            <Savings />
          </div>
          <div className="flex gap-3 overflow-y-auto h-[40%]">
            <LatestTransaction />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[40%]">
          <div className="flex gap-3 h-[40%] overflow-y-auto">
            <BugetPlan />
          </div>
          <div className="flex gap-3 overflow-y-auto">
            <OutcomeStatistic />
          </div>
        </div>
      </div>
    </div>
  );
}
