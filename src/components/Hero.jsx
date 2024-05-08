import { innerPeace, setup2, setup21 } from '../assets/images';
import Slider from './Slider';

export default function Hero() {
  let images = [setup2, setup21];

  return (
    <>
      <div className='bg-secondary grid grid-cols-3 py-16 max-sm:grid-cols-1 max-sm:gap-10'>
        <div className='flex flex-col gap-4 ml-32 mr-10 py-[50%] max-xl:mx-10 max-sm:py-0'>
          <h1 className='font-bold text-4xl text-slate-800 max-sm:text-3xl'>
            50 + Beautiful rooms inspiration
          </h1>
          <p className='max-sm:text-xs'>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className='bg-primary border text-white font-semibold px-9 py-4 max-w-52'>
            Explore More
          </button>
        </div>
        <div className='relative justify-center xl:flex xl:w-full max-sm:mx-5'>
          <img src={innerPeace} alt='Inner Peace' className='' />
          <div className='absolute w-full pl-11 bottom-10 flex items-end max-sm:pl-3'>
            <div className='bg-white bg-opacity-45 py-20 px-5 max-sm:py-15 max-sm:px-2'>
              <p>01 Bed Room</p>
              <h1 className='text-4xl font-bold max-sm:text-2xl'>
                Inner Peace
              </h1>
            </div>
            <div className='bg-primary px-3 py-3 text-white text-2xl'>
              &rarr;
            </div>
          </div>
        </div>
        <div className='xl:flex xl:justify-start xl:pl-5 xl:pr-0 xl:max-w-[100%] xl:h-[100%] pr-0'>
          <Slider images={images} />
        </div>
      </div>
    </>
  );
}
