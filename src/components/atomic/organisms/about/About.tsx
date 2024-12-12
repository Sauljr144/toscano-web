import Image from 'next/image';
import AboutBG from '../../../../../public/assets/images/about.jpg';

const About = () => {
  return (
    <div id='about-us' className='container mx-auto p-3 bg-green mt-8 rounded-xl'>
      <div className='relative lg:h-[900px] h-[800px] w-full'>
        <Image
          src={AboutBG}
          alt='Farmland'
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
          className='rounded-2xl'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 rounded-2xl flex flex-col justify-end text-white font-poppins '>
          <div className='lg:ms-12 flex flex-col lg:items-start items-center'>
            <span
              
              className=' text-white bg-white/60 border-2 rounded-2xl py-2 px-8 font-poppins font-medium lg:text-base text-xs backdrop-blur-sm'
            >
              About Us
            </span>

            <h2 className='lg:text-4xl text-2xl font-medium lg:mt-10 mt-7'>
              Growing Since 1991
            </h2>
            <div className='lg:font-medium mt-5 mb-12 lg:pr-20 lg:px-0 px-10 lg:text-base text-xs font-poppins leading-5 lg:text-left text-center'>
              <p>
                We are a family-owned and operated farm located in Lodi,
                California, in the heart of the San Joaquin Valley, one of the
                most food productive valleys in the country. We have been
                farming since 1991 and our goal has always been to provide fresh
                vegetables to our valuable customers who support us year after
                year.
              </p>
              <p className='mt-5'>
                We know for a fact that we are feeding families with fresh and
                nutritious vegetables due to our growing practices such as
                applying organic fertilizers, hand weeding instead of using
                herbicides and crop rotation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
