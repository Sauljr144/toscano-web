import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import ToscanoLogo from '../../../../../public/assets/images/Logo.png';
import links from '@/utils/links';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col  items-center'>
      <div className='z-10'>
        <Link href={'/'}>
          <Image
            src={ToscanoLogo}
            alt={'Tocano Family Farms Logo'}
            className='lg:w-20 w-14'
            priority
          />
        </Link>
      </div>
      <div className=' w-full bg-tan-dark rounded-t-xl p-4 mt-[-30px]'>
        <div className='container mx-auto flex flex-col  items-center text-black font-poppins'>
          <div className='mt-10 mb-4'>
            {links.map((link) => (
              <Link key={link.name} href={link.href} className='lg:mx-4 mr-3 lg:text-base text-xs font-medium hover:underline hover:underline-offset-1'>
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex mb-12'>
            <Link href={'https://www.facebook.com/ToscanoFamilyFarm'}>
              <FaFacebookF className='lg:text-lg mr-2' />
            </Link>
            <Link href={'https://www.instagram.com/toscanofamilyfarm/'}>
              <FaInstagram className='text-lg lg:text-xl ' />
            </Link>
          </div>
            <p className='font-light text-xs text-center'>Copyright © 2024 Toscano Family Farms All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
