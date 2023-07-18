import Navbar from '@/components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import localFont from 'next/font/local';

import MobileMenu from '@/components/Header/MobileHeader';
import Head from 'next/head';

const gilroy = localFont({
  src: './fonts/Gilroy-Bold.ttf',
  display: 'swap',
  variable: '--font-gilroy',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksant',
});

export const metadata: Metadata = {
  title: 'monsue-online',
  description: 'Greated by monsue-online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${gilroy.variable}`}>
        <Navbar />
        <MobileMenu />
        <main className=" pt-[86px]">{children}</main>
      </body>
    </html>
  );
}
