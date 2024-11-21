
import React from "react";
import Image from "next/image";

const CEO = () => {
  return (
    <div className="pl-10 font-[sans-serif]  flex justify-center pb-5 lg:pb-0 lg:py-10 px-4 lg:px-0 bg-[#f1f5f9] lg:mb-8 ">
  <div>
    <div className="grid grid-cols-1 gap-6 pt-5">
      <div className="col-span-2">
        <h2 className="text-[#0B2154] text-sm lg:text-3xl font-semibold lg:font-extrabold  lg:text-center">CEO Message SM Motor Corporation </h2>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:gap-12 gap-6 mt-3 lg:mt-16">
      <div className="max-w-[700px] h-auto py-5 pl-14 lg:pl-44 pr-4 bg-white border-2 border-[#0B2154] rounded-3xl relative">
        <Image alt="ceo-img" src="/img/IMG_2866.jpg" className="w-20 lg:w-44 h-20 lg:h-44 rounded-full absolute -left-10 top-0 bottom-0 my-auto border-2 border-gray-300 ring-4  " width={400} height={400}/>
        <div>
          <h4 className="text-black text-base font-bold">Mohammad Sohel</h4>
          <p className="mt-1 text-xs text-black font-semibold">SAMIR GROUP</p>
        </div>
        <div className="mt-4">
          <p className="text-black text-sm leading-relaxed text-justify">Welcome to SM Motor Corporation, where we strive to be your trusted partner for all your automotive needs. We’re proud to offer a wide range of services, including classic car restoration, import of reconditioned cars, pre-owned vehicle sales, and 24/7 towing services. Our expert team, advanced tools, and commitment to quality ensure that every service enhances your driving experience. Thank you for choosing SM Motor Corporation—let’s journey forward together, with excellence and reliability.</p>
        </div>
       
      </div>
    </div>
  </div>
</div>

  );
};

export default CEO;
