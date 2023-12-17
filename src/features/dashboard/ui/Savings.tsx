import { Carousel, Typography } from '@material-tailwind/react';
import CardsCarousel from './CardsCarousel';

export default function Savings() {
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
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                    }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <CardsCarousel />
          <CardsCarousel />
          <CardsCarousel />
        </Carousel>
        <div className="flex flex-col gap-5 items-end py-3">
          <div>
            <Typography
              placeholder={''}
              variant="h5"
              className="text-blue-600 text-right whitespace-nowrap"
            >
              Rp. 999,999,999.00
            </Typography>
            <Typography
              placeholder={''}
              variant="h6"
              className="text-custom_blue_2 text-right"
            >
              Total balance
            </Typography>
          </div>
          <div >
            <Typography
              placeholder={''}
              variant="h6"
              className="text-green-500 text-right"
            >
              Rp. 999,999,999.00
            </Typography>
            <Typography
              placeholder={''}
              variant="paragraph"
              className="text-custom_blue_2 text-right"
            >
              Income
            </Typography>
          </div>
          <div >
            <Typography
              placeholder={''}
              variant="h6"
              className="text-red-500 text-right"
            >
              Rp. 999,999,999.00
            </Typography>
            <Typography
              placeholder={''}
              variant="paragraph"
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
