import Image from "next/image";
import ToscanoLogo from '../../public/assets/images/Logo.png'
import Link from "next/link";



export default function Home() {

  const links = [
    {name: 'Home', href:'#home'},
    {name: 'About Us', href: '#about-us'},
    {name: 'Products', href: '#products'},
    {name: 'Gallery', href: '#gallery'},
    {name: 'Contact Us', href: '#contact-us'},
    {name: 'Shop', href: 'https://toscanohotsauce.square.site/'},
    
  ]

  return (
   <>
    <nav className="flex p-4 items-center justify-between bg-white-tan rounded-b-2xl">
        <div>
          <Image src={ToscanoLogo} alt={"logo"} className="w-20"/>
        </div>
        <div>
          {links.map((link)=> <Link key={link.name} href={link.href} className="mx-5 font-poppins">{link.name}</Link> )}
        </div>
    </nav>
   </>
  );
}
