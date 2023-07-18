'use client';

import { ServicesData } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const Services = () => {
  const [hoveredBlock, setHoveredBlock] = useState('Customizable');

  return (
    <div className="container mx-auto py-5">
      <h2 className="heading">Our Services</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {ServicesData.map(data => (
          <div
            className={`  space-y-2.5 py-10 px-5 lg:px-10 ${
              hoveredBlock === data.name ? 'active-card' : ''
            }`}
            onMouseEnter={() => setHoveredBlock(data.name)}
            onMouseLeave={() => setHoveredBlock('')}
            key={data.name}
          >
            <div className="mx-auto w-24 h-24 bg-skin-cyan-500 rounded-full grid place-items-center">
              <Image src={data.icon} alt={data.name} />
            </div>
            <h2 className="text-2xl text-center font-gilroy">{data.name}</h2>
            <p className="text-center text-lg font-normal text-black font-quicksant">
              {data.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
