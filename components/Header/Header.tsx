'use client';

import React from 'react';

import { NavLinks } from '@/constants';
import Link from 'next/link';
import Logo from '@/assets/Logo/Logo';

const Navbar = () => {
  return (
    <div
      className={`fixed  bg-white top-0  w-full py-4 hidden border xl:block border-navbar-border  z-50 transition-colors duration-300 `}
    >
      <div className=" container mx-auto flex items-center justify-between">
        <div>
          <>
            <Logo />
          </>
        </div>
        <ul className=" flex items-center gap-12">
          {NavLinks.map((data, i) => (
            <li key={i}>
              <Link
                className=" text-lg text-skin-dark-600  font-normal"
                href={data.href}
                aria-label={data.lebel}
              >
                {data.lebel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
