import { Carousel, Typography } from '@material-tailwind/react';
import CardsCarousel from './CardsCarousel';
import { useState } from 'react';
import { Savings } from '@interfaces/dashboardTypes';
import { useCurrencyFormat } from '@utils/helper';

export default function Savings({
  data,
  totalBalance,
}: {
  data: Savings[] | undefined;
  totalBalance: number | undefined;
}) {
  const [savingsIndex, setSavingsIndex] = useState<number>(0);

  return (
    <div className="bg-white/30 p-3 rounded-lg w-full flex flex-col h-full">
      <Typography
        placeholder={''}
        variant="paragraph"
        className="font-semibold"
      >
        Savings Account
      </Typography>
      <div className="flex justify-between h-full gap-3">
        <Carousel
          placeholder={''}
          className="rounded-xl w-[70%]"
          autoplay={true}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => {
            setSavingsIndex(activeIndex);
            return (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill('').map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            );
          }}
        >
          {data?.map((item, i) => (
            <CardsCarousel key={i} typeTabungan={item.TypeTabungan} />
          ))}
        </Carousel>
        <div className="flex flex-col gap-3 items-end py-3">
          <div>
            <Typography
              placeholder={''}
              variant="lead"
              className="text-blue-600 text-right whitespace-nowrap"
            >
              {useCurrencyFormat(totalBalance)}
            </Typography>
            <Typography
              placeholder={''}
              variant="h6"
              className="text-custom_blue_2 text-right"
            >
              Total balance
            </Typography>
          </div>
          <div>
            <Typography
              placeholder={''}
              variant="paragraph"
              className="text-green-500 text-right"
            >
              {useCurrencyFormat(data && data[savingsIndex]?.nilai_tabungan)}
            </Typography>
            <Typography
              placeholder={''}
              variant="small"
              className="text-custom_blue_2 text-right"
            >
              Income
            </Typography>
          </div>
          <div>
            <Typography
              placeholder={''}
              variant="paragraph"
              className="text-red-500 text-right"
            >
              {useCurrencyFormat(data && data[savingsIndex]?.total_outcome)}
            </Typography>
            <Typography
              placeholder={''}
              variant="small"
              className="text-custom_blue_2 text-right"
            >
              Outcome
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
