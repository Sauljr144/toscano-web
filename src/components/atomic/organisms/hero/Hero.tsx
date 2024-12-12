import Image from 'next/image';
import HomeBG from '../../../../../public/assets/images/home.jpg';
import Link from 'next/link';

const Hero = () =>{
    const shopUrl = 'https://toscanohotsauce.square.site/'

    return(
        <div className='container mx-auto px-3 '>
        <div className='relative lg:h-[800px] h-[600px] w-full '>
          <Image
            src={HomeBG}
            alt='Farmland'
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className='rounded-2xl'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-black/30 rounded-2xl flex flex-col items-center justify-center text-white text-center font-poppins'>
            <h3 className='lg:text-2xl font-medium'>Lodi, California</h3>
            <h1 className=' lg:text-8xl text-4xl font-bold lg:mt-3 mt-0'>
              From Our Farm <br /> To Your Table
            </h1>
            <Link href={shopUrl} className='lg:mt-5 mt-1'>
              <button className='text-red bg-tan rounded-2xl py-3 px-6 font-medium lg:text-base text-xs'>
                VISIT OUR STORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Hero