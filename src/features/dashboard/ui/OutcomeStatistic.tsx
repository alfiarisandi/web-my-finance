import { BugetPlan } from '@interfaces/dashboardTypes';
import { Progress, Typography } from '@material-tailwind/react';
import { UtensilsCrossed } from 'lucide-react';

export default function OutcomeStatistic({
  data,
}: {
  data: BugetPlan[] | undefined;
}) {
  return (
    <div className="">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Outcome Statistics
      </Typography>
      <div className="flex flex-col gap-2 mt-2">
        {data?.map((item, i) => {
          if (i < 3) {
            return (
              <div className="flex justify-between gap-4 items-center" key={i}>
                <div className="p-2 bg-custom_blue/30 rounded-md">
                  <UtensilsCrossed className="text-white" />
                </div>
                <div className="w-full flex flex-col">
                  <Progress
                    placeholder={''}
                    value={item.percentage_outcome}
                    size="sm"
                    className="bg-white/30"
                    color="blue"
                  />
                  <Typography
                    placeholder={''}
                    variant="paragraph"
                    className="text-custom_dark_blue"
                  >
                    {item.TypeAnggaran?.nama_anggaran}
                  </Typography>
                </div>
                <Typography
                  placeholder={''}
                  variant="paragraph"
                  className="text-custom_dark_blue font-semibold"
                >
                  {item.percentage_outcome}%
                </Typography>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
