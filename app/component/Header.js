
'use client';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const items = [
  {
    background: "/img/banner (1).jpg",
    leftImage: "/img/carousel-1.png",
    title: "Welcome to  Samir Motor Corporation",
    description: "learn more",
  },
  {
    background: "/img/banner (2).jpg",
    leftImage: "/img/carousel-2.png",
    title: "Welcome to  Samir Motor Corporation",
    description: "learn more",
  },

];

export function Header() {
  return (
    <Carousel transition={{ duration: 2 }} className="relative">
      {items.map((item, index) => (
        <div className="relative h-56 sm:h-screen w-full" key={index}>
          {/* Background Image */}
          <Image
            src={item.background}
            alt={`Background ${index + 1}`}
            className="h-full w-full object-cover"
            width={1600}
            height={1400}
          />

          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>

          {/* Left-side Content */}
          <div className="absolute top-0 left-0 h-full sm:w-1/2 flex items-center px-6 lg:px-10">
            <div className="text-white text-center sm:text-start mx-4 sm:mx-0 ">
              <h2 className="text-xl sm:text-2xl lg:text-4xl sm:ml-10  font-bold sm:text-justify uppercase" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">{item.title}</h2>
              <div className="flex justify-center sm:justify-start">
                <a href="#" className="bg-[#D81324] text-white uppercase inline-flex items-center py-3 px-5  sm:ml-10 mt-4" data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000">
                  {item.description}
                  <FaArrowRight className=' ml-3' />

                </a>
              </div>

            </div>
          </div>

          {/* Right-side Image */}
          <div className="absolute top-0 right-0 h-full w-1/2 flex  items-center justify-center">
            <Image
              src={item.leftImage}
              alt={`Image ${index + 1}`}
              className="h-3/4 sm:w-44 lg:w-96  object-contain hidden sm:block"
              width={600}
              height={600}
              data-aos="zoom-in-down"
              data-aos-duration="500"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}


