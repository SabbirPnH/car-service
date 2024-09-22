

import Image from "next/image";
import React from "react";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import '../../public/css/category.css'
const CategoryProduct = () => {
  return (
    <section className="bg-[#f0f8ff]">
      <div className=" grid grid-cols-1 sm:flex items-center justify-between px-4 sm:px-14">
      <div className="flex gap-4 sm:gap-6 xl:gap-20 items-center  py-5 xl:py-10 relative">
  <h1 className=" text-[16px] sm:text-[22px] lg:text-[38px] xl:text-[56px] font-semibold">
    Choose The <span className="text-[#68cf49]">Categories</span> <br /> That You Want
  </h1>
  <Image
    src="/img/drink.png"
    width={70}
    height={70}
    alt=""
    className="z-10 smooth-bounce"
  />
</div>
    <div className="flex items-center gap-5 border border-black rounded-full px-4 h-14  cursor-pointer hover:bg-gray-200">
      <button className="font-semibold text-gray-700 lg:text-xl hover:text-[#68cf49]">See All Categories</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="78" height="19" viewBox="0 0 78 19" fill="none">
										<path d="M66.918 10.9147C66.8987 10.9909 66.8754 11.0659 66.8482 11.1394C66.3343 12.5191 65.8568 13.9149 65.3832 15.3094C65.2835 15.6007 65.0431 15.8908 65.3278 16.3278C68.9295 13.4161 73.0932 11.4878 77.3487 9.65131C72.9717 7.73141 68.8104 5.59576 65.0804 2.61703C64.8556 3.06744 65.0978 3.36045 65.2072 3.6577C65.7259 5.06223 66.2433 6.47061 66.7965 7.85894C67.1854 8.84516 67.2283 9.92384 66.918 10.9147Z" fill="#F5004F"></path>
										<rect y="8.90649" width="68" height="1" rx="0.5" fill="#F5004F"></rect>
									</svg>
    </div>
      </div>

      <div className="py-4 px-4 mx-auto max-w-9xl sm:py-4 sm:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <Image
                src="/img/catagory (1).png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                width={700} height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <FaSearch className=" text-black mx-2 text-3xl" />
              <FaCartPlus className="text-[#F5004F] mx-2 text-3xl" />
              </div>
              <h3 className="z-10 text-2xl font-medium text-white w-44 absolute top-0 left-0 p-4 xs:text-xl md:text-3xl group-hover:text-black transition-colors">
                Wines
              </h3>
            </a>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
            >
             <Image
                src="/img/catagory (2).png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                width={700} height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <FaSearch className=" text-black mx-2 text-3xl" />
              <FaCartPlus className="text-[#F5004F] mx-2 text-3xl" />
              </div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl group-hover:text-black transition-colors">
                Gin
              </h3>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
               <Image
                src="/img/catagory (5).png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                width={700} height={700}
              />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <FaSearch className=" text-black mx-2 text-3xl" />
                <FaCartPlus className="text-[#F5004F] mx-2 text-3xl" />
                </div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl group-hover:text-black transition-colors">
                  Whiskey
                </h3>
              </a>
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
              <Image
                src="/img/catagory (4).png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                width={700} height={700}
              />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <FaSearch className=" text-black mx-2 text-3xl" />
                  <FaCartPlus className="text-[#F5004F] mx-2 text-3xl" />
                </div>
                <h3 className="z-10  text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl group-hover:text-black transition-colors">
                  Vodka
                </h3>
              </a>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
            <Image
                src="/img/catagory (3).png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                width={700} height={700}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
              <FaSearch className=" text-black mx-2 text-3xl" />
              <FaCartPlus className="text-[#F5004F] mx-2 text-3xl" />
              </div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl group-hover:text-black transition-colors">
                Brandy
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;



