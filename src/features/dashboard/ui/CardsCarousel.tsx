import { Typography } from '@material-tailwind/react';

export default function CardsCarousel() {
  return (
    <div className="h-full w-full max-w-[500px] px-12 py-6 mx-auto">
      <div className="bg-custom_blue rounded-md p-4 flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <Typography
            placeholder={''}
            variant="paragraph"
            color="white"
            className="font-semibold"
          >
            Bibit
          </Typography>
          <Typography
            placeholder={''}
            variant="small"
            className="font-light text-custom_light"
          >
            Account Wallet
          </Typography>
        </div>

        <Typography placeholder={''} variant="lead" color="white">
          5452 **** **** 6723
        </Typography>

        <div className="flex justify-between">
          <div>
            <Typography
              placeholder={''}
              variant="small"
              className="font-light text-custom_light"
            >
              Account Name
            </Typography>
            <Typography placeholder={''} variant="paragraph" color="white">
              Alfi Arisandi
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
