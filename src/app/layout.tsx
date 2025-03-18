import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Barlow } from 'next/font/google';

export const metadata: Metadata = {
  title: 'melik.dev',
  description: 'melik.dev personal portfolio website.',
};

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth" lang="en">
      <body className={`${barlow.className} bg-[#1D1E21] max-w-7xl mx-auto`}>
        <Navbar />
        <section className="flex justify-center gap-20">
          <div className="w-[25%] hidden md:block">
            <Sidebar />
          </div>
          <div className="w-[80%] md:w-[50%] sm:w-[60%] flex flex-col ">
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
