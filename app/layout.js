import { Josefin_Slab } from 'next/font/google'
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';
 
const jose = Josefin_Slab({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "Surya Kanta Ghosh",
  description: "Portfolio of atnakayrus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jose.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
