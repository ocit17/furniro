import { footerLinks } from '../constants';

export default function Footer() {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start flex-wrap max-lg:flex-col border-t-2'>
        <div className='flex flex-col items-start px-10 max-sm:py-10 py-20'>
          <h1 className='font-bold text-3xl'>Funiro.</h1>
          <p className='mt-20 text-base leading-7 font-montserrat text-slate-700 w-80 max-sm:mt-3'>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>

        <div className='flex flex-1 justify-evenly lg:gap-10 gap-20 flex-wrap px-10 max-xl:py-0 max-sm:px-9 py-20'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-slate-700'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-16 max-xl:mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-1 justify-start lg:gap-10 gap-20 flex-wrap px-10 max-xl:pt-11 max-sm:pb-0 max-sm:px-9 py-20'>
          <div>
            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-slate-700'>
              Newsletter
            </h4>
            <div className='flex items-center'>
              <input
                type='email'
                placeholder='Enter your email'
                className='w-full px-4 py-2 mr-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
              />
              <button className='px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-dark focus:outline-none'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center font-montserrat cursor-pointer px-10 '>
          <div className='border-t-2 w-full py-5'>
            <p>2023 furino. All rights reverved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
