import Banner from '../components/Banner';
import Browse from '../components/Browse';
import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <section className='w-full'>
        <Banner />
      </section>
      <section className='w-[85%] mx-auto'>
        <Browse />
      </section>
      <section className='w-[85%] mx-auto'>
        <Products />
      </section>
      <section className='w-full mx-auto'>
        <Hero />
      </section>
    </>
  );
}
