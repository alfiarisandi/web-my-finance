import { IconTabungans } from '@assets/index';
import { randomGradientColors } from '@constants/gradientColor';
import { TypeTabungan } from '@interfaces/dashboardTypes';
import { Typography } from '@material-tailwind/react';
import { getCookiesUser } from '@utils/helper';

export default function CardsCarousel({
  typeTabungan,
}: {
  typeTabungan: TypeTabungan | undefined;
}) {
  const color: number = Number((Math.random() * 4).toFixed());
  return (
    <div className=" w-full max-w-[500px] h-[250px] p-6 mx-auto">
      <div
        className={`${randomGradientColors[color]} rounded-md p-4 flex flex-col justify-between h-full `}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <Typography
              placeholder={''}
              variant="paragraph"
              color="white"
              className="font-semibold"
            >
              {typeTabungan && typeTabungan.nama_tabungan}
            </Typography>
            <Typography
              placeholder={''}
              variant="small"
              className="font-light text-custom_light"
            >
              Account Wallet
            </Typography>
          </div>
          <div className="p-2 bg-white/80 rounded-md">
            {IconTabungans[typeTabungan.icon]}
          </div>
        </div>

        <Typography placeholder={''} variant="paragraph" color="white">
          0000 **** **** 0000
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
              {getCookiesUser('fullname')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
