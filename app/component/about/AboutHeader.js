

// import React from 'react';
// import Image from 'next/image';
// import TextCircel from './TextCircel';

// const aboutData = [
//   {
//     id: 1,
//     title: 'Empowering Succeed',
//     description: 'We are united by a common goal—to deliver the highest quality products and services to our customers. This shared vision drives us to continuously improve and push the boundaries of what’s possible.',
//     stats: [
//       { label: 'Satisfied customers', value: '59+' },
//       { label: 'Reliable partners', value: '150+' },
//       { label: 'Vegetables and fruits', value: '512+' }
//     ],
//     images: [
//       '/img/about (1).jpg',
//       '/img/about (2).jpg'
//     ]
//   }
// ];

// export default function AboutHeader() {
//   const data = aboutData[0];

//   return (
//     <div>
//       <section className="py-5 sm:py-24 relative">
//         <div className="w-full max-w-9xl px-4 sm:px-14 ">
//           <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
//             <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
//               <div className="sm:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex relative">
//                 <Image
//                   className="rounded-xl"
//                   src={data.images[0]}
//                   alt="about Us image"
//                   width={600}
//                   height={400}
//                 />
//                 <div className="absolute ml-32 lg:ml-7 lg:-mt-16 xl:-mt-12 xl:ml-24 hidden sm:block inset-0 flex justify-center items-center">
//                   <TextCircel />
//                 </div>
//               </div>
//               <Image
//                 className="sm:ml-0 ml-auto rounded-xl"
//                 src={data.images[1]}
//                 alt="about Us image"
//                 width={600}
//                 height={400}
//               />
//             </div>
//             <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
//               <div className="w-full flex-col justify-center items-start gap-8 flex">
//                 <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
//                   <h2 className="text-2xl md:text-5xl font-bold leading-tight" data-aos="zoom-in" data-aos-duration="2500">
//                     {data.title}
//                   </h2>
//                   <p className="text-gray-500 text-base font-normal line-clamp-3 sm:line-clamp-none leading-relaxed lg:text-start text-center">
//                     {data.description}
//                   </p>
//                 </div>
//                 <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
//                   {data.stats.map((stat) => (
//                     <div key={stat.label} className="flex-col justify-start items-start inline-flex">
//                       <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
//                         {stat.value}
//                       </h3>
//                       <h6 className="text-gray-500 text-base font-normal leading-relaxed">
//                         {stat.label}
//                       </h6>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <button className="sm:w-fit w-full px-3.5 py-2 bg-[#F5004F] hover:bg-[#68cf49] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
//                 <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client'

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import TextCircel from './TextCircel';

const aboutData = [
  {
    id: 1,
    title: 'Empowering Succeed',
    description: 'We are united by a common goal—to deliver the highest quality products and services to our customers. This shared vision drives us to continuously improve and push the boundaries of what’s possible.',
    stats: [
      { label: 'Satisfied customers', value: 59 },
      { label: 'Reliable partners', value: 150 },
      { label: 'Vegetables and fruits', value: 512 }
    ],
    images: [
      '/img/about (1).jpg',
      '/img/about (2).jpg'
    ]
  }
];

export default function AboutHeader() {
  const data = aboutData[0];

  return (
    <div>
      <section className="py-5 sm:py-24 relative">
        <div className="w-full max-w-9xl px-4 sm:px-14 ">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="sm:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex relative">
                <Image
                  className="rounded-xl"
                  src={data.images[0]}
                  alt="about Us image"
                  width={600}
                  height={400}
                />
                <div className="absolute ml-32 lg:ml-7 lg:-mt-16 xl:-mt-12 xl:ml-24 hidden sm:block inset-0 flex justify-center items-center">
                  <TextCircel />
                </div>
              </div>
              <Image
                className="sm:ml-0 ml-auto rounded-xl"
                src={data.images[1]}
                alt="about Us image"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-2xl md:text-5xl font-bold leading-tight" data-aos="zoom-in" data-aos-duration="2500">
                    {data.title}
                  </h2>
                  <p className="text-gray-500 text-base font-normal line-clamp-3 sm:line-clamp-none leading-relaxed lg:text-start text-center">
                    {data.description}
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  {data.stats.map((stat) => (
                    <div key={stat.label} className="flex-col justify-start items-start inline-flex">
                      <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        <CountUp end={stat.value} duration={2} />+
                      </h3>
                      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                        {stat.label}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-[#F5004F] hover:bg-[#68cf49] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
