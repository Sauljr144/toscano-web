import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/atomic/organisms/layout/Navbar";


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
      </body>
    </html>
  );
}
