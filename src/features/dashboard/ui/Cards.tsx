import { Typography } from '@material-tailwind/react';

export default function Cards() {
  return (
    <div className="py-6 flex gap-3 justify-center">
      {
        // [1, 1].map((item) => (

        <div className='p-3 rounded-md bg-white/60 flex flex-col justify-between items-start gap-5'>

          <div className="flex flex-col">
            <Typography placeholder={''} className="font-semibold" variant="small">
              Rp.5.000.000.000,00
            </Typography>
            <Typography placeholder={''} className="text-gray" variant="small">
              Budget value
            </Typography>
          </div>
          <Typography
            placeholder={''}
            className="font-semibold text-custom_blue_2"
            variant="small"
          >
            Bayar Kosan
          </Typography>
        </div>
        // ))
      }
    </div>
  );
}
