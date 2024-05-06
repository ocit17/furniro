import { ourProducts } from '../constants';

export default function Products() {
  return (
    <>
      <div className='flex flex-col xl:gap-10 max-sm:gap-5 xl:my-16 my-8 px-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-center xl:text-4xl'>Our Products</h1>
        </div>
        <div className='grid xl:grid-cols-4 gap-3'>
          {ourProducts.map((item, index) => (
            <div
              key={index}
              className='w-[100%] flex flex-col xl:gap-2 bg-slate-100 rounded-xl px-3 py-3'
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className='w-[100%] h-[100%]'
              />
              <div className='px-2'>
                <p className='xl:font-bold xl:text-xl'>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-5'>
          <button className='border-primary border text-primary font-bold px-9 py-3 w-60 hover:bg-secondary transition hover:-translate-y-1'>
            Show More
          </button>
        </div>
      </div>
    </>
  );
}
