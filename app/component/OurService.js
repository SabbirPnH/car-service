'use client';
import { useState } from 'react';
import { FaCarSide, FaCar, FaCog, FaOilCan } from 'react-icons/fa';
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';


const OurService = () => {
  const services = [
    {
      title: 'Diagnostic Test',
      image: '/img/service-1.jpg',
      description: 'Samir motors corporation.',

      icon: <FaCarSide className="text-3xl mr-3" />,
    },
    {
      title: 'Engine Servicing',
      image: '/img/service-2.jpg',
      description: 'Samir motors corporation.',
      icon: <FaCar className="text-3xl mr-3" />,
    },
    {
      title: 'Tires Replacement',
      image: '/img/service-3.jpg',
      description: 'Samir motors corporation.',
      icon: <FaCog className="text-3xl mr-3" />,
    },
    {
      title: 'Oil Changing',
      image: '/img/service-4.jpg',
      description: 'Samir motors corporation.',
      icon: <FaOilCan className="text-3xl mr-3" />,
    },
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <div className="px-4 sm:px-20 py-4 sm:py-12" data-aos="fade-up"
      data-aos-duration="2000">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-[#D81324] font-bold uppercase"> Our Services </h6>
        <h1 className="mb-5 text-2xl sm:text-4xl font-semibold pt-2 text-center text-[#0B2154]">Explore Our Services</h1>
      </div>
      <div className="flex flex-col lg:flex-row sm:pt-7">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="nav flex flex-col w-full">
            {services.map((service, index) => (
              <button
                key={index}
                className={`nav-link flex items-center p-4 mb-4 sm:mr-7 text-left ${activeServiceIndex === index ? 'bg-[#D81324] text-white' : 'text-[#D81324] bg-[#f1f5f9]'
                  }`}
                onClick={() => setActiveServiceIndex(index)}
                style={{ transition: 'background-color 0.3s ease, color 0.3s ease' }}
              >
                {service.icon}
                <h4 className={`m-0 font-semibold text-lg sm:text-2xl ${activeServiceIndex === index ? 'text-white' : 'text-[#0B2154]'}`}>
                  {service.title}
                </h4>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col md:flex-row g-4">
            <div className="w-full md:w-1/2 sm:min-h-[350px]" >
              <div className="relative h-full">
                <Image
                  className="absolute sm:block inset-0 w-full h-full object-cover transition-opacity duration-300"
                  src={services[activeServiceIndex].image}
                  alt={services[activeServiceIndex].title}
                  width={400} 
                  height={400}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 sm:ml-5">
              <p className="text-lg sm:text-2xl font-bold text-[#0B2154] mb-4">{services[activeServiceIndex].description}</p>
              <p className='text-justify text-[#596277] '>Samir Motors Corporation is a premier automotive service provider committed to delivering high-quality solutions for all your vehicle needs. Our team of skilled technicians utilizes state-of-the-art equipment and technology to ensure efficient and precise diagnostics, repairs, and maintenance.</p>
              <p className='flex text-sm py-2 text-[#596277]'><IoCheckmarkSharp className='text-green-700 text-xl font-bold mr-3' />Modern Equipment</p>
              <p className='flex text-sm py-2 text-[#596277]'><IoCheckmarkSharp className='text-green-700 text-xl font-bold mr-3' />Expert Workers</p>
              <p className='flex text-sm py-2 text-[#596277]'><IoCheckmarkSharp className='text-green-700 text-xl font-bold mr-3' />Quality Servicing</p>

              <div className="flex justify-start  mt-2">
                <a href="#" className="bg-[#D81324] text-white uppercase inline-flex items-center py-3 px-5">
                  Read More
                  <FaArrowRight className=' ml-3' />

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .nav-link {
            justify-content: flex-start;
          }
          .w-full {
            width: 100% !important; /* Ensure full width on mobile */
          }
          img {
            height: auto; /* Allow height to adjust automatically */
          }
        }
      `}</style>
    </div>
  );
};

export default OurService;




