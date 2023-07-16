import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logo } from '..';

const Logo = () => {
  return (
    <Link href={'/'}>
      <Image src={logo} alt="mosques online" />
    </Link>
  );
};

export default Logo;
