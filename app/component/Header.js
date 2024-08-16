



'use client';
import { Carousel } from "@material-tailwind/react";
import "../globals.css";
import Image from "next/image";

const images = [
  { src: "/img/header1.jpeg", alt: "image 1" },
  { src: "/img/header2.jpeg", alt: "image 2" },
  { src: "/img/header3.jpeg", alt: "image 3" },
  { src: "/img/header4.jpeg", alt: "image 4" },
];

export function Header() {
  return (
    <Carousel transition={{ duration: 2 }} className="">
      {images.map((image, index) => (
        <div className="relative h-52 sm:h-screen w-full" key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
            width={1600}
            height={1400}
          />
          <h2>sdhgfdfgh</h2>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}
    </Carousel>
  );
}













// 'use client';
// import { useState, useEffect } from 'react';
// import { Carousel } from "@material-tailwind/react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "../globals.css";
// import Image from "next/image";

// const images = [
//   { src: "/img/header1.jpeg", alt: "image 1" },
//   { src: "/img/header2.jpeg", alt: "image 2" },
//   { src: "/img/header3.jpeg", alt: "image 3" },
//   { src: "/img/header4.jpeg", alt: "image 4" },
// ];

// const textArray = ["Go Organic with Your Food Choices", "Choose Organic for Healthier Food", "Switch to Organic Eating Today","Elevate Your Diet with Organic Foods"];

// export function Header() {
//   const [currentText, setCurrentText] = useState(textArray[0]);
//   const [textIndex, setTextIndex] = useState(0);

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
//     }, 5000); // Change text every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setCurrentText(textArray[textIndex]);
//     AOS.refresh(); // Refresh AOS to trigger the animation on text change
//   }, [textIndex]);

//   const getAosAttributes = () => {
//     if (textIndex % 2 === 0) {
//       return {
//        'data-aos': 'fade-right',
//         'data-aos-anchor': '#example-anchor',
//         'data-aos-offset': '500',
//         'data-aos-duration': '500',
//       };
//     } else {
//       return {
//         'data-aos': 'fade-left',
//         'data-aos-anchor': '#example-anchor',
//         'data-aos-offset': '500',
//         'data-aos-duration': '500',
//       };
//     }
//   };

//   return (
//     <Carousel transition={{ duration: 2 }} className="">
//       {images.map((image, index) => (
//         <div className="relative h-52 sm:h-screen w-full" key={index}>
//           <Image
//             src={image.src}
//             alt={image.alt}
//             className="h-full w-full object-cover"
//             width={1600}
//             height={1400}
//           />
//           {/* Black Overlay */}
//           <div className="absolute inset-0 bg-black opacity-50"></div>

//           {/* Centered Text and Button */}
//           <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
//             <h2
//               className="text-white text-[14px] sm:text-[44px] lg:text-[64px] font-bold transition-opacity sm:px-24 duration-1000 ease-in-out opacity-100"
//               {...getAosAttributes()} // Apply AOS attributes dynamically
//               key={textIndex} // This key triggers the animation on text change
//             >
//               {currentText}
//             </h2>
//             <div className="flex items-center gap-5  border border-[#F5004F] rounded-md px-4 h-16 cursor-pointer bg-[#f0f8ff]">
//               <button className="font-semibold text-gray-900 lg:text-xl hover:text-[#68cf49]">
//                 SHOP NOW
//               </button>
//               <svg xmlns="http://www.w3.org/2000/svg" width="78" height="19" viewBox="0 0 78 19" fill="none">
//                 <path d="M66.918 10.9147C66.8987 10.9909 66.8754 11.0659 66.8482 11.1394C66.3343 12.5191 65.8568 13.9149 65.3832 15.3094C65.2835 15.6007 65.0431 15.8908 65.3278 16.3278C68.9295 13.4161 73.0932 11.4878 77.3487 9.65131C72.9717 7.73141 68.8104 5.59576 65.0804 2.61703C64.8556 3.06744 65.0978 3.36045 65.2072 3.6577C65.7259 5.06223 66.2433 6.47061 66.7965 7.85894C67.1854 8.84516 67.2283 9.92384 66.918 10.9147Z" fill="#F5004F"></path>
//                 <rect y="8.90649" width="68" height="1" rx="0.5" fill="#F5004F"></rect>
//               </svg>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Carousel>
//   );
// }
