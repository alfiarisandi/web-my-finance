import { Typography } from '@material-tailwind/react';

export default function Cards() {
  return (
    <div className="px-3 py-1 rounded-md bg-white/60 flex justify-between items-center">
      <div className="">
        <Typography
          placeholder={''}
          className="font-semibold text-custom_blue_2"
          variant="small"
        >
          Bayar Kosan
        </Typography>
        <Typography placeholder={''} className="text-gray" variant="small">
          Budget value
        </Typography>
      </div>
      <Typography placeholder={''} className="font-semibold" variant="small">
        Rp. 5.000.000.000,00
      </Typography>
    </div>
  );
}
