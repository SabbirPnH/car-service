import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutHero() {
  return (
    <div className="relative w-full">
      <Image
        className="w-full h-[150px] sm:h-[250px] lg:h-[350px] object-cover"
        src="/img/banner.jpg"
        alt="banner img"
        width={1400}
        height={1400}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl sm:text-5xl font-bold mb-4 ">About Us</h2>
        <div className="flex items-center gap-2 sm:gap-5 text-sm sm:text-base">
          <p className='cursor-pointer font-semibold'>Home</p>
          <FaArrowRightLong />
          <p className='text-[#F5004F] cursor-pointer font-semibold'>About Us</p>
        </div>
      </div>
      
    </div>
  );
}
