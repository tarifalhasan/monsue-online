import { contactAsset } from '@/assets';
import Image from 'next/image';
import React from 'react';

import dynamic from 'next/dynamic';
const DynamicFormWithNoSSR = dynamic(() => import('./Form'), {
  ssr: false,
});
const Contact = () => {
  return (
    <section id="contact" className=" py-6 lg:py-14 container  mx-auto">
      <div className=" xl:px-24">
        <div className=" grid gap-10 lg:grid-cols-2">
          <div>
            <Image
              className=" mx-auto w-full max-w-[419px] h-full object-cover"
              src={contactAsset}
              alt="contact_assets"
            />
          </div>

          <DynamicFormWithNoSSR />
        </div>
      </div>
    </section>
  );
};

export default Contact;
