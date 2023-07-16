import Contact from '@/components/Contact/Contact';

import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
});

import Services from '@/components/Services/Services';
import Themes from '@/components/Themes/Themes';
import Image from 'next/image';
import About from '@/components/About';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Themes />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
