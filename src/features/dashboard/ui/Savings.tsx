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
      <div className="flex justify-between h-full">
        <Carousel
          placeholder={''}
          className="rounded-xl"
          autoplay={true}
          loop={true}
          navigation={({ setActiveIndex, activeIndex, length }) => (
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
          )}
        >
          <CardsCarousel />
          <CardsCarousel />
          <CardsCarousel />
        </Carousel>
        <div className="flex flex-col">
          <span>awdawoajdoaj</span>
          <span>awdawoajdoaj</span>
          <span>awdawoajdoaj</span>
          <span>awdawoajdoaj</span>
        </div>
      </div>
    </div>
  );
}
