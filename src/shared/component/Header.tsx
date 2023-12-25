import { Typography } from '@material-tailwind/react';
import { UserCircle2 } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Typography
          placeholder={''}
          variant="h5"
          className="text-custom_blue_2 font-bold"
        >
          Hello Alfi Arisandi
        </Typography>
        <Typography
          placeholder={''}
          variant="paragraph"
          className="text-custom_gray"
        >
          Good Afternoon
        </Typography>
      </div>
      <div className="flex gap-3 items-center hover:bg-white/30 hover:cursor-pointer px-3 rounded-lg">
        <div className="flex justify-center items-center h-fit p-1 bg-gradient-to-tl from-custom_blue to-custom_pink_2 rounded-full">
          <UserCircle2 className="h-6 w-6 text-white" />
        </div>
        <div className="max-w-[300px]">
          <Typography
            placeholder={''}
            variant="paragraph"
            className="text-custom_blue_2 font-semibold"
          >
            alfiarisandi
          </Typography>
          <Typography
            placeholder={''}
            variant="small"
            className="text-custom_gray"
          >
            sub title
          </Typography>
        </div>
      </div>
    </div>
  );
}
