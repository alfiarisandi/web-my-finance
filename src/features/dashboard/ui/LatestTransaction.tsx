import { Typography } from '@material-tailwind/react';
import { ShoppingBag } from 'lucide-react';

export default function LatestTransaction() {
  return (
    <div className="bg-white/30 p-3 rounded-lg w-full flex flex-col">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Latest Transaction
      </Typography>
      <div className="mt-4 h-full overflow-y-auto flex flex-col gap-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              <div className="p-2 rounded-md bg-white/50 text-custom_blue_2">
                <ShoppingBag />
              </div>
              <div>
                <Typography
                  placeholder={''}
                  variant="small"
                  className="font-medium"
                >
                  Makan Dimana
                </Typography>
                <Typography
                  placeholder={''}
                  variant="small"
                  className="font-medium text-custom_gray"
                >
                  Makan dan minum
                </Typography>
              </div>
            </div>
            <Typography
              placeholder={''}
              variant="small"
              className="font-light text-custom_gray"
            >
              23 Oktober 2023 07:00 Am
            </Typography>
            <div className="p-2">
              <Typography
                placeholder={''}
                variant="paragraph"
                className="font-bold text-red-700"
              >
                -Rp. 40.000,00
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
