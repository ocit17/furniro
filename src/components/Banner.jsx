export default function Banner() {
  return (
    <>
      <div className='bg-banner bg-auto bg-center h-[718px] aspect-auto py-32 xl:pl-[750px]'>
        <div className='banner max-[300px]:hidden max-md:w-[600px] max-sm:w-[350px]'>
          <p className='text-lg'>New Arrival</p>
          <p className='text-primary font-bold text-6xl max-md:text-5xl max-sm:text-3xl'>
            Discover Our New Collection
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi
            beatae nemo minus nulla nam id impedit asperiores recusandae tenetur
            error animi, repellat numquam reprehenderit odio consequatur itaque
            voluptates eos.
          </p>
          <button className='bg-primary p-6 font-montserrat font-semibold text-white w-56 shadow-lg'>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
