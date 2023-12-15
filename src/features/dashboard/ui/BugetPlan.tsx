import { Typography } from '@material-tailwind/react';
import Cards from './Cards';

export default function BugetPlan() {
  return (
    <div className="flex flex-col gap-3 bg-white/30 p-3 rounded-md w-full relative">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Buget Plans{' '}
        <Typography
          placeholder={''}
          variant="small"
          className="text-custom_gray"
        >
          February 2023
        </Typography>
      </Typography>
      <div className="h-full flex flex-col gap-2 overflow-y-auto pr-1 relative">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
