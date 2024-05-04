import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Cart, Heart, Search, Account } from '../assets/icons';
import { Logo } from '../assets/images';
import { navLinks } from '../constants';
import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import NotFound from './NotFound';
import Contact from '../pages/Contact';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className='py-7 shadow-sm'>
        <div className='flex justify-between items-center px-8 md:px-12 lg:px-20'>
          {/* Logo */}
          <div className='flex items-center gap-1'>
            <img src={Logo} alt='logo' className='h-[29px]' />
            <span className='font-bold font-montserrat text-3xl'>Furniro</span>
          </div>

          {/* Toggler for mobile */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-black focus:outline-none'
            >
              {isMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu */}
          <ul className='hidden items-center gap-16 lg:flex md:space-x-10'>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  key={link.label}
                  to={link.href}
                  className='font-montserrat leading-normal text-lg text-black font-semibold hover:bg-primary p-2 rounded-lg hover:text-white'
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className='hidden xl:flex items-center space-x-16'>
            <img src={Account} alt='Account' className='cursor-pointer' />
            <img src={Search} alt='Search' className='cursor-pointer' />
            <img src={Heart} alt='Heart' className='cursor-pointer' />
            <img src={Cart} alt='Cart' className='cursor-pointer' />
          </div>
        </div>

        {/* Responsive Menu */}
        <ul
          className={`flex justify-center items-center gap-8 md:hidden ${
            isMenuOpen ? 'flex flex-col' : 'hidden'
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link
                key={link.label}
                to={link.href}
                className='font-montserrat leading-normal text-lg text-black font-semibold hover:bg-primary p-2 rounded-lg hover:text-white'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </header>
  );
}
