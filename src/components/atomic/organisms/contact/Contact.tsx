import markets from '@/utils/markets';
import ContactForm from './ContactForm';

const Contact = () =>{



    return(
        <div className='container mx-auto p-3 mt-10 flex flex-col justify-center'>
        <div className='flex justify-center mt-24 mb-10'>
          <span
            id='contact-us'
            className='bg-yellow rounded-2xl py-2 px-8 font-poppins font-medium lg:text-base text-xs backdrop-blur-sm'
          >
            Contact Us
          </span>
        </div>
        <div className=' text-center lg:text-2xl text-xs font-poppins font-normal leading-5 mb-10 lg:px-44 px-10 '>
          <h3 className="lg:text-4xl text-2xl font-medium lg:mt-10 mt-7">Find Us at Farmers Markets!</h3>
        </div>
        <div className='masonry sm:masonry-sm md:masonry-md lg:px-64 px-2 mb-10'>
          {markets.map((market)=> <div className='bg-yellow rounded-xl lg:px-6 py-4 px-3 font-poppins lg:text-base text-xs break-inside mb-5'>
            <p className='font-semibold'>{market.market}</p>
            <p className='mt-2'>{market.days}</p>
            <p>{market.months}</p>
          </div>)}
        </div>
        <ContactForm/>
      </div>
    )
}

export default Contact