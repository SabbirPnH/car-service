



// 'use client';
// import { Carousel } from "@material-tailwind/react";
// import Image from "next/image";

// const images = [
//   { src: "/img/carousel-bg-1.jpg", alt: "image 1" },
//   { src: "/img/carousel-bg-2.jpg", alt: "image 2" },
//   { src: "/img/header3.jpeg", alt: "image 3" },
//   { src: "/img/header4.jpeg", alt: "image 4" },
// ];

// export function Header() {
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
         
//           <div className="absolute inset-0 bg-black opacity-50"></div>
        
//         </div>
//       ))}
//     </Carousel>
//   );
// }


'use client';
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const items = [
  {
    background: "/img/carousel-bg-1.jpg",
    leftImage: "/img/carousel-1.png",
    title: "Qualified Car Wash Service Center",
    description: "learn more",
  },
  {
    background: "/img/carousel-bg-2.jpg",
    leftImage: "/img/carousel-2.png",
    title: "Title 2",
    description: "This is the second image",
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
          <div className="absolute top-0 left-0 h-full sm:w-1/2 flex items-center px-6 sm:px-10">
            <div className="text-white text-center sm:text-start mx-4 sm:mx-0 ">
              <h2 className="text-2xl sm:text-3xl lg:text-6xl sm:ml-10  font-bold ">{item.title}</h2>
              <button className="uppercase text-sm sm:text-md font-semibold   sm:ml-10">{item.description}</button>
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
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}


