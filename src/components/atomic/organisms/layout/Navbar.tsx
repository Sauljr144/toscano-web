'use client';
import Image from 'next/image';
import ToscanoLogo from '../../../../../public/assets/images/Logo.png';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { IoMenu, IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import links from '@/utils/links';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className=' bg-white-tan rounded-b-2xl z-10  sticky top-0'>
      <div className='container flex p-4 items-center justify-between mx-auto '>
        <div>
          <Link href={'/'}>
            <Image
              src={ToscanoLogo}
              alt={'Tocano Family Farms Logo'}
              className='lg:w-20 w-14'
              priority
            />
          </Link>
        </div>
        <div className=' hidden lg:flex items-center '>
          <div className=''>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=' mx-5 font-poppins hover:font-medium hover:underline hover:underline-offset-8 '
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href={'https://www.facebook.com/ToscanoFamilyFarm'}>
            <FaFacebookF className='text-lg ms-6 mr-3' />
          </Link>
          <Link href={'https://www.instagram.com/toscanofamilyfarm/'}>
            <FaInstagram className='text-xl mr-2' />
          </Link>
        </div>

        <div className='lg:hidden z-10 '>
          <button onClick={() => setOpenMenu(true)}>
            <IoMenu className='text-3xl' />
          </button>

          <div
            className={
              openMenu
                ? 'fixed  right-0 left-0 bottom-0 flex flex-col  w-[60%] h-screen bg-orange rounded-r-xl  ease-in duration-300 '
                : 'fixed  right-0 left-[-100%] bottom-0 flex flex-col w-[60%] h-screen bg-orange rounded-r-xl ease-in duration-300'
            }
          >
            <div className='mt-5 me-4 flex justify-end'>
              <button onClick={() => setOpenMenu(false)}>
                <IoCloseOutline className='text-3xl' />
              </button>
            </div>
            <div className='flex flex-col h-3/4 mt-14'>
              <div className='flex flex-col ms-5'>
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='mb-4 text-xl font-poppins hover:font-medium hover:underline hover:underline-offset-8'
                    onChange={()=>setOpenMenu(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className='flex items-center  ms-5'>
                <Link href={'https://www.facebook.com/ToscanoFamilyFarm'}>
                  <FaFacebookF className='text-xl mr-2 ' />
                </Link>
                <Link href={'https://www.instagram.com/toscanofamilyfarm/'}>
                  <FaInstagram className='text-2xl' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
