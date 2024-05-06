import { browseTehRange } from '../constants';

export default function Browse() {
  return (
    <>
      <div className='flex flex-col xl:gap-10 max-sm:gap-5 xl:my-16 my-8 px-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-center xl:text-4xl'>
            Browse The Range
          </h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='flex flex-row gap-2'>
          {browseTehRange.map((item, index) => (
            <div key={index} className='w-[50%] flex flex-col xl:gap-9'>
              <img src={item.thumbnail} alt={item.title} />
              <p className='text-center xl:font-bold xl:text-2xl'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
