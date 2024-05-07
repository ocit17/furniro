import { innerPeace } from '../assets/images';

export default function Hero() {
  return (
    <>
      <div className='bg-secondary grid grid-cols-3 px-10 py-10'>
        <div className='flex flex-col gap-4 ml-24 py-[50%]'>
          <div>
            <h1 className='font-bold text-4xl text-slate-800'>
              50 + Beautiful rooms inspiration
            </h1>
          </div>
          <div>
            <p>
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
          </div>
          <div>
            <button className='bg-primary border text-white font-semibold px-9 w-55'>
              Explore More
            </button>
          </div>
        </div>
        <div className='flex justify-center relative'>
          <div className='w-full'>
            <img
              src={innerPeace}
              alt='Inner Peace'
              className='h-[100%] w-[100%] aspect-auto'
            />
          </div>
          <div className='absolute w-full pl-11 bottom-10 flex items-end'>
            <div className='bg-white bg-opacity-45 py-20 px-5'>
              <p>01 Bed Room</p>
              <h1 className='text-4xl font-bold'>Inner Peace</h1>
            </div>
            <div className='bg-primary px-3 py-3 text-white text-2xl'>
              &rarr;
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='flex justify-center'>
            <nav className='inline-flex space-x-2'>
              <a
                href='#'
                className='w-3 h-3 flex items-center justify-center bg-primary rounded-full hover:bg-gray-300 ring-primary ring-opacity-50 ring-offset-8 ring-1'
              ></a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
