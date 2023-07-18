import { ThemesData } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Themes = () => {
  return (
    <div id="themes" className=" container mx-auto">
      <h2 className=" heading">Choose Theme </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        {ThemesData.map((data, index) => (
          <div key={index} className=" w-full    overflow-hidden ">
            <div>
              <Image
                className="filter-base rounded-[15px]  transform transition duration-500 hover:scale-110 w-full "
                src={data.image}
                alt={data.alt as any}
              />
            </div>
            <h2 className=" text-center pt-2 font-gilroy text-lg sm:text-2xl text-skin-dark-600">
              {data.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
