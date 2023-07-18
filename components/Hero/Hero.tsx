import React from 'react';
import sideImage from '@/assets/images/hero_side_image.svg';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className=" min-h-[46em] sm:min-h-[75.125em] md:min-h-[62em] lg:min-[59em] bg-hero_bg  grid  w-full h-full bg-no-repeat  bg-cover bg-center">
      <div className="container mx-auto">
        <div className="grid pt-[2em] sm:pt-[4em] lg:pt-[10.5em] lg:grid-cols-2 gap-10">
          <div className=" space-y-2">
            <p className=" text-base sm:text-lg font-quicksant font-normal text-skin-dark-600">
              Beautiful Websites Made Easy!
            </p>
            <h1 className=" text-[2em] sm:text-[3.5em] leading-tight font-gilroy">
              Create an Online Home for Your Mosque
            </h1>
            <p className=" text-base sm:text-lg font-quicksant font-normal text-skin-dark-600">
              We offer the best solution for mosques to get their own beautiful,
              functional, and easy-to-maintain website! Our platform offers free
              and paid themes, allowing you to create a unique online presence
              that represents your community
            </p>
          </div>
          <div>
            <Image
              className=" w-full object-cover h-full"
              src={sideImage}
              alt="sideImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
