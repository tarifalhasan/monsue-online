'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import Logo from '@/assets/Logo/Logo';
import { NavLinks } from '@/constants';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-white border-navbar-border border z-50 bg-primary fixed left-0 py-5 right-0 xl:hidden px-4">
      <div className="flex justify-between">
        <Logo />

        <button onClick={() => openNavbar()}>
          <RiMenu3Fill className={`text-black`} size={25} />
        </button>
      </div>
      <div
        className={` fixed bg-[#2D5199]  border-navbar-border border mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
          isOpen ? 'right-0' : 'right-full'
        }  z-50 top-0 `}
      >
        <div className=" flex  items-center justify-between">
          <Logo />
          <RxCross2
            onClick={() => openNavbar()}
            className="text-white "
            size={36}
          />
        </div>
        <ul className="flex flex-col items-center pt-7 md:flex-row gap-6">
          {NavLinks.map(link => (
            <li key={link.href} onClick={openNavbar}>
              <Link
                href={link.href}
                aria-label={link.lebel}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.lebel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
