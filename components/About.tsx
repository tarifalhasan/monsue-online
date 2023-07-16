import React from 'react';
import kabaImage from '@/assets/images/masjid.png';
import Image from 'next/image';
const About = () => {
  return (
    <section id="about" className=" py-16">
      <div className=" relative py-6 lg:py-16  grid place-items-center  min-h-[600px] sm:min-h-[883px]  w-full h-full bg-no-repeat  bg-cover bg-center bg-about_bg">
        <div className=" relative z-20 container mx-auto">
          <div className=" flex pt-[140px] ">
            <div className=" w-full basis-full lg:basis-[55%] space-y-4">
              <h2 className=" text-left py-0  heading">About Us</h2>
              <p className=" text-lg font-quicksant font-normal text-skin-dark-600">
                Our mission is simple – we want to provide mosques with the
                tools they need to create a beautiful online presence. Managing
                a mosque can be challenging, and that website design and
                management may not be your top priority. That&apos;s why
                we&apos;re here to help! Our platform is designed to be easy to
                use, so you can focus on what matters most – serving your
                community.
              </p>
              <button className="btn_primary mt-2">Read More</button>
            </div>
            <div></div>
          </div>
        </div>
        <div className=" sm:block hidden z-10 absolute right-0 bottom-0">
          <Image src={kabaImage} alt="kaba" />
        </div>
      </div>
    </section>
  );
};

export default About;
