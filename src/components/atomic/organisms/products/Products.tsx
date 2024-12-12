import items from '@/utils/items';
import stores from '@/utils/stores';
import Card from '../../molecules/Card';
import { StaticImageData } from 'next/image';
import StoresBtn from '../../atoms/StoresBtn';

interface ItemsData {
  name: string;
  image: StaticImageData;
  url: string;
  alt: string;
}

interface StoresData {
  name: string;
  url: string;
}

const Products = () => {
  return (
    <div className='container mx-auto p-3 mt-10 rounded-xl bg-orange flex flex-col justify-center'>
      <div className='flex justify-center mt-10 mb-10'>
        <span
          id='products'
          className='bg-orange-light rounded-2xl py-2 px-8 font-poppins font-medium lg:text-base text-xs backdrop-blur-sm'
        >
          Products
        </span>
      </div>
      <div className=' text-center lg:text-2xl text-xs font-poppins font-normal leading-5 mb-10 lg:px-44 px-10 '>
        <p>
          At our farm, we take pride in offering a variety of fresh produce,
          delicious melons, flavorful hot sauces, and versatile dry powders.
          Each product is crafted and grown with care to deliver quality and
          taste that you can enjoy and trust
        </p>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-7 md:gap-5 gap-3 mb-10 lg:mx-12 md:mx-10'>
        {items.map((item: ItemsData) => (
          <Card name={item.name} image={item.image} url={item.url} alt={item.alt}/>
        ))}
      </div>

      <h3 className='lg:text-2xl text-lg font-poppins font-semibold text-center mb-8 mt-10'>
        Find Our Hot Sauces at Local Stores!
      </h3>
      <div className='text-center mb-8'>
        {stores.map((store: StoresData) => (
          <StoresBtn name={store.name} url={store.url} />
        ))}
      </div>
      <h3 className='lg:text-2xl text-lg font-poppins font-semibold text-center mb-8 mt-10'>
        Hot Great Hot Sauces Are Made!
      </h3>
    </div>
  );
};

export default Products;
