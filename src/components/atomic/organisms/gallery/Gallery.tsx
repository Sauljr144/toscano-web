import Image from 'next/image';
import G1 from '../../../../../public/assets/images/g1.jpg';
import G2 from '../../../../../public/assets/images/g2.jpg';
import G3 from '../../../../../public/assets/images/g3.jpg';
import G4 from '../../../../../public/assets/images/g4.jpg';
import G5 from '../../../../../public/assets/images/g5.jpg';
import G6 from '../../../../../public/assets/images/g6.jpg';

const Gallery = () => {
  const photos1 = [{photo: G1, alt: 'farm plants'},{photo: G2, alt: 'farmland and truck'}];
  const photos2 = [{photo: G4, alt: 'farm plants'},{photo: G5, alt: 'farmland and truck'}];

  return (
    <div className='container mx-auto p-3 mt-10  rounded-xl bg-blue-light flex flex-col justify-center'>
      <div className='flex justify-center mt-24 mb-10'>
        <span
          id='gallery'
          className='bg-white rounded-2xl py-2 px-8 font-poppins font-medium lg:text-base text-xs backdrop-blur-sm'
        >
          Gallery
        </span>
      </div>
      <div className=' text-center lg:text-2xl text-xs font-poppins font-normal leading-5 mb-10 lg:px-44 px-10 '>
        <p>Explore the vibrant heart of our farm through our gallery!</p>
      </div>
      <div className='grid grid-cols-2 lg:gap-6 gap-2 lg:px-48 px-6 mb-10'>
        {photos1.map((photo, index)=><Image key={index} src={photo.photo} alt={photo.alt} className='rounded-2xl' style={{ objectFit: 'cover'}} loading='lazy' />)}
        <Image className='rounded-2xl col-span-2 row-span-2' src={G3} alt={'farming'} loading='lazy'/>
        {photos2.map((photo, index)=><Image key={index} src={photo.photo} alt={photo.alt} className='rounded-2xl'  style={{ objectFit: 'cover'}} loading='lazy' />)}
        <Image className='rounded-2xl col-span-2 row-span-2' src={G6} alt={'tractor on farmland'} loading='lazy'/>
      </div>
    </div>
  );
};

export default Gallery;
