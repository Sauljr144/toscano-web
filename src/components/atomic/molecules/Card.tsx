import Image, { StaticImageData } from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';

interface CardProps{
    name:string;
    image: StaticImageData;
    url:string;
    alt:string;
}

const Card = ({name, image, url, alt}:CardProps) => {
  return (
    <div className='relative lg:py-[160px] md:py-[160px] py-[130px]  w-full'>
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className='rounded-3xl'
      />

      <div className='absolute top-0 left-0 w-full h-full rounded-2xl flex flex-col items-center justify-end text-white text-center font-poppins'>
        <Link href={url}  className='lg:mt-5 mt-1 flex w-full'>
          <button className='text-red bg-tan hover:bg-green font-poppins rounded-3xl flex justify-center lg:ps-4 py-2 ps-3 font-medium lg:text-base text-xs w-full mx-4 mb-5'>
            {name}
            <GoArrowUpRight className='text-xs ms-1' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
