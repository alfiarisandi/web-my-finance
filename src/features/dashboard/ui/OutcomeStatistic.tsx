import { Progress, Typography } from '@material-tailwind/react';
import { UtensilsCrossed } from 'lucide-react';

export default function OutcomeStatistic() {
  return (
    <div className="w-full p-3">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Outcome Statistics
      </Typography>
      <div className="flex flex-col gap-2 mt-2 w-full">
        {[1, 1, 1].map((item) => (
          <div className="flex justify-between gap-4 items-center">
            <div className="p-2 bg-custom_blue/30 rounded-md">
              <UtensilsCrossed className="text-white" />
            </div>
            <div className="w-full flex flex-col">
              <Progress
                placeholder={''}
                value={70}
                size="sm"
                className="bg-white/30"
                color="blue"
              />
              <Typography
                placeholder={''}
                variant="small"
                className="text-custom_gray"
              >
                Makan dan operasional
              </Typography>
            </div>
            <Typography
              placeholder={''}
              variant="paragraph"
              className="text-custom_dark_blue font-semibold"
            >
              70%
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
