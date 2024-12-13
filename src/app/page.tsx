import About from '@/components/atomic/organisms/about/About';
import Contact from '@/components/atomic/organisms/contact/Contact';
import Gallery from '@/components/atomic/organisms/gallery/Gallery';
import Hero from '@/components/atomic/organisms/hero/Hero';
import Products from '@/components/atomic/organisms/products/Products';

export default function Home() {

  return (
    <>
      <Hero/>
      <About/>
      <Products/>
      <Gallery/>
      <Contact/>
    </>
  );
}
