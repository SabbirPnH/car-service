


import { FaUsersCog } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration for all elements
      easing: 'ease-in-out', // Smoother easing function
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <div className="px-4 sm:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quality Servicing */}
        <div
          className="bg-white p-6 flex space-x-4"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="100" // 100ms delay for the first card
        >
          <FaCertificate className="text-7xl text-[#D81324]" />
          <div>
            <h5 className="text-lg font-bold text-[#0B2154]">Quality Servicing</h5>
            <p className="text-[#596277] py-3 text-justify">
              Diam dolor diam ipsum sit amet diam et eos erat ipsum
            </p>
            <a href="#" className="ary border-b border-gray-300 text-[#0B2154]">
              Read More
            </a>
          </div>
        </div>
        {/* Expert Workers */}
        <div
          className="bg-[#f1f5f9] p-6 flex space-x-4"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="300" // 300ms delay for the second card
        >
          <FaUsersCog className="text-7xl text-[#D81324]" />
          <div>
            <h5 className="text-lg font-bold text-[#0B2154]">Expert Workers</h5>
            <p className="text-[#596277] py-3 text-justify">
              Diam dolor diam ipsum sit amet diam et eos erat ipsum
            </p>
            <a href="#" className="ary border-b border-gray-300 text-[#0B2154]">
              Read More
            </a>
          </div>
        </div>
        {/* Modern Equipment */}
        <div
          className="bg-white p-6 flex space-x-4"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-delay="500" // 500ms delay for the third card
        >
          <BsTools className="text-7xl text-[#D81324]" />
          <div>
            <h5 className="text-lg font-bold text-[#0B2154]">Modern Equipment</h5>
            <p className="text-[#596277] py-3 text-justify">
              Diam dolor diam ipsum sit amet diam et eos erat ipsum
            </p>
            <a href="#" className="ary border-b border-gray-300 text-[#0B2154]">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
