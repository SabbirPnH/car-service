import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 sm:px-20 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side (Image) */}
        <div className="relative pt-4" style={{ minHeight: 400 }}>
          <Image className="absolute w-full h-full object-cover" src="/img/couple-buying-new-car-at-car-dealership-T2UQ6JH-800x533.jpg" alt='img' width={400} height={400} />
          {/* <div className="absolute top-0 right-0 mt-[-1rem] mr-[-1rem] py-4 px-5 bg-black/20">
            <h1 className="text-5xl text-white">15 <span className="text-lg">Years</span></h1>
            <h4 className="text-white">Experience</h4>
          </div> */}
        </div>
        {/* Right Side (Text and List) */}
        <div>
          <h6 className="text-[#D81324] font-bold uppercase"> About Us </h6>
          <h1 className="mb-6 text-xl sm:text-4xl font-semibold pt-2  text-[#0B2154]">
          Samir motors corporation.
          </h1>
          <p className="mb-6 text-[#596277] text-justify tracking-tight">
          Samir motors is a best vehicles corporation in Bangladesh. We import all type of motors vehicles in our country. We can give best deal in all vehicles. samir motors corporation is a distributor of Digital Motors Ltd.
          </p>
          {/* List Items */}
          <div className="space-y-6 mb-6">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="bg-[#f1f5f9] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-[#0B2154]">01</span>
              </div>
              <div className="pl-4">
                <h6 className="font-semibold text-[#0B2154]">Professional &amp; Expert</h6>
                <span className="text-[#596277] text-justify">Skilled technicians delivering high-quality automotive services for optimal performance.</span>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
              <div className="bg-[#f1f5f9] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-[#0B2154]">02</span>
              </div>
              <div className="pl-4">
                <h6 className="font-semibold text-[#0B2154]">Quality Servicing Center</h6>
                <span className="text-[#596277] text-justify">Comprehensive automotive services ensuring efficient, safe, and reliable vehicles.</span>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
              <div className="bg-[#f1f5f9] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-[#0B2154]">03</span>
              </div>
              <div className="pl-4">
                <h6 className="font-semibold text-[#0B2154]">Awards Winning Workers</h6>
                <span className="text-[#596277] text-justify">Recognized professionals delivering exceptional service and quality results.</span>
              </div>
            </div>
          </div>
          <div className="flex sm:justify-start justify-center">
            <a href="#" className="bg-[#D81324] text-white uppercase inline-flex items-center py-3 px-5">
              Read More
              <FaArrowRight className=' ml-3' />

            </a>
          </div>
        </div>
      </div>
    </div>


  )
}
export default About