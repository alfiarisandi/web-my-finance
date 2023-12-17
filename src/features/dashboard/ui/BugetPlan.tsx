import { Carousel, Typography } from '@material-tailwind/react';
import Cards from './Cards';

export default function BugetPlan() {
  return (
    <div className="flex flex-col gap-3 bg-white/30 p-3 rounded-md w-full">
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
      <div className="h-full flex gap-3">
        {/* <Carousel
          placeholder={''}
          className=""
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
        > */}
        <Cards />
        {/* <Cards /> */}
        <Cards />
        {/* </Carousel> */}

      </div>
    </div>
  );
}
