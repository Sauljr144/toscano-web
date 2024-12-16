import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/atomic/organisms/layout/Navbar";
import Footer from "@/components/atomic/organisms/layout/Footer";


export const metadata: Metadata = {
  title: "Toscano Family Farm",
  description: "From our farm to your table!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={''}
      >
         <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
