'use client';

import Link from 'next/link';
import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=" bg-skin-cyan-500">
      <div className="container mx-auto">
        <div className="footer_top  flex flex-col sm:flex-row  items-center sm:justify-between py-5">
          <ul className=" flex items-center gap-5">
            <li>
              <Link href={''} target="_blank">
                <BsInstagram size={20} />
              </Link>
            </li>
            <li>
              <Link href={''} target="_blank">
                <BsTwitter size={20} />
              </Link>
            </li>
            <li>
              <Link href={''} target="_blank">
                <FaFacebookF size={20} />
              </Link>
            </li>
          </ul>

          <form>
            <div>
              <h2 className=" text-2xl text-center uppercase font-gilroy">
                NewsLetter{' '}
              </h2>
              <p className="text-sm py-2 text-center font-quicksant text-skin-dark-600">
                Keep our lates news and events subscribe our newslatter
              </p>
            </div>
            <div className=" overflow-hidden px-4 flex justify-between items-center w-full max-w-[505px] bg-white rounded-full  py-1">
              <div className=" w-full">
                <input
                  className=" w-full focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <button type="submit" className=" basis-[65px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9_12)">
                    <g filter="url(#filter0_d_9_12)">
                      <path
                        d="M25.9999 4.33337C14.0399 4.33337 4.33325 14.04 4.33325 26C4.33325 37.96 14.0399 47.6667 25.9999 47.6667C37.9599 47.6667 47.6666 37.96 47.6666 26C47.6666 14.04 37.9599 4.33337 25.9999 4.33337ZM36.0533 19.0667C35.7283 22.49 34.3199 30.81 33.6049 34.645C33.3016 36.27 32.6949 36.8117 32.1316 36.8767C30.8749 36.985 29.9216 36.0534 28.7083 35.2517C26.8016 33.995 25.7183 33.215 23.8766 32.0017C21.7316 30.5934 23.1183 29.8134 24.3533 28.5567C24.6783 28.2317 30.2249 23.1834 30.3333 22.7284C30.3483 22.6595 30.3463 22.5879 30.3274 22.5199C30.3085 22.452 30.2734 22.3897 30.2249 22.3384C30.0949 22.23 29.9216 22.2734 29.7699 22.295C29.5749 22.3384 26.5416 24.3534 20.6266 28.34C19.7599 28.925 18.9799 29.2284 18.2866 29.2067C17.5066 29.185 16.0333 28.7734 14.9283 28.405C13.5633 27.9717 12.5016 27.7334 12.5883 26.975C12.6316 26.585 13.1733 26.195 14.1916 25.7834C20.5183 23.0317 24.7216 21.2117 26.8233 20.345C32.8466 17.8317 34.0816 17.3984 34.9049 17.3984C35.0783 17.3984 35.4899 17.4417 35.7499 17.6584C35.9666 17.8317 36.0316 18.07 36.0533 18.2434C36.0316 18.3734 36.0749 18.7634 36.0533 19.0667Z"
                        fill="#80EEE9"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_9_12"
                      x="-0.666748"
                      y="-0.666626"
                      width="53.3333"
                      height="53.3334"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_9_12"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_9_12"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_9_12">
                      <rect width={52} height={52} rx={26} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="footer_bottom py-3 border-t border-[#121212] w-full flex justify-between items-center">
          <h3 className=" text-lg text-skin-dark-600 font-normal font-quicksant">
            Terms of Use
          </h3>
          <h3 className=" text-lg text-skin-dark-600 font-normal font-quicksant">
            Privacy Policy
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
