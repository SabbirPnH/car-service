import React, { useState } from "react";
import Devider from "./Devider";
import Image from "next/image";

const clientList = [
  [
    {
      img: "/img/client (1).jpg",
      name: "Sophia Davis",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
    {
      img: "/img/client (2).jpg",
      name: "James Wilson",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
    {
      img: "/img/client (3).jpg",
      name: "Jessica Miller",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
  ],
  [
    {
      img: "/img/client (4).jpg",
      name: "Emily Johnson",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
    {
      img: "/img/client (5).jpg",
      name: "David Brown",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
    {
      img: "/img/client (6).jpg",
      name: "Michael Smith",
      position:"Client",
      content:
        "Most Lorem Ipsum generators on the internet tend to repeat the same set of predefined chunks, which can make the text feel repetitive and predictable.",
    },
  ],
];

function ShapeOne() {
  return (
    <svg
      className="absolute hidden lg:block lg:h-96  bottom-0 left-0 -z-[1]"
      width="404"
      height="572"
      viewBox="0 0 404 572"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="118"
        cy="286"
        r="265.5"
        stroke="#F5004F"
        strokeOpacity="0.2"
        strokeWidth="41"
      />
    </svg>
  );
}

function ShapeTwo() {
  return (
    <svg
      className="absolute hidden lg:block h-96 top-0 mt-16 right-0 -z-[1]"
      width="269"
      height="479"
      viewBox="0 0 269 479"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="239.5"
        cy="239.5"
        r="239.5"
        fill="#68cf49"
        fillOpacity="0.25"
      />
    </svg>
  );
}

const ClientCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="light py-5 sm:py-10 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1]">
      <ShapeOne />
      <ShapeTwo />

      <div className=" px-4 sm:px-14 ">
        <div className="grid grid-cols-12 gap-6 items-center justify-between ">
          <div className="col-span-12  mb-4">
            <h2  className="text-2xl md:text-5xl font-bold leading-tight" data-aos="zoom-in" data-aos-duration="2500">
            What our clients say
            </h2>
            <Devider/>
          </div>
       
        </div>

        <div className="overflow-hidden relative">
          <div
            className={`flex transition-transform duration-700 ease-in-out transform`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {clientList.map((slide, slideIndex) => (
              <div
                className="flex-shrink-0 w-full grid grid-cols-3 gap-6"
                key={slideIndex}
              >
                {slide.map((testimonial, i) => (
                  <div className="col-span-3 lg:col-span-1" key={i}>
                    <div className="bg-white dark:bg-[#0b1727] shadow-2xl h-full p-6 xl:p-10">
                      <div className="flex items-center border-b-2 pb-2 mb-6">
                        <div className="mr-3">
                          <Image
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="max-w-full h-14 w-14 rounded-full border"
                           width={65} height={55}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-medium">
                            {testimonial.name}
                          </h4>
                          <p className="text-md italic text-[#F5004F] mb-2">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="opacity-75 mb-2">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4 lg:mt-12">
          {clientList.map((item, i) => (
            <button
              className={`w-2 h-2 rounded-full ${
                index === i
                  ? "scale-125 bg-[#F5004F]"
                  : "bg-gray-400 dark:bg-slate-800"
              }`}
              key={i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
