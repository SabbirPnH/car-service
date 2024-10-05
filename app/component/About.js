import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="px-4 sm:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side (Image) */}
        <div className="relative pt-4" style={{ minHeight: 400 }}>
          <Image className="absolute w-full h-full object-cover" src="/img/about.jpg" alt='img' width={400} height={400} />
          <div className="absolute top-0 right-0 mt-[-1rem] mr-[-1rem] py-4 px-5 bg-black/20">
            <h1 className="text-5xl text-white">15 <span className="text-lg">Years</span></h1>
            <h4 className="text-white">Experience</h4>
          </div>
        </div>
        {/* Right Side (Text and List) */}
        <div>
          <h6 className="text-[#D81324] font-bold uppercase"> About Us </h6>
          <h1 className="mb-6 text-3xl sm:text-4xl font-semibold pt-2 text-justify text-[#0B2154]">
            <span className="text-[#D81324]">CarServ</span> Is The Best Place For Your Auto Care
          </h1>
          <p className="mb-6 text-[#596277] text-justify tracking-tight">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
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
                <span className="text-[#596277] text-justify">Diam dolor diam ipsum sit amet diam et eos</span>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex items-start">
              <div className="bg-[#f1f5f9] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-[#0B2154]">02</span>
              </div>
              <div className="pl-4">
                <h6 className="font-semibold text-[#0B2154]">Quality Servicing Center</h6>
                <span className="text-[#596277] text-justify">Diam dolor diam ipsum sit amet diam et eos</span>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex items-start">
              <div className="bg-[#f1f5f9] flex-shrink-0 flex items-center justify-center w-12 h-12">
                <span className="font-bold text-[#0B2154]">03</span>
              </div>
              <div className="pl-4">
                <h6 className="font-semibold text-[#0B2154]">Awards Winning Workers</h6>
                <span className="text-[#596277] text-justify">Diam dolor diam ipsum sit amet diam et eos</span>
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