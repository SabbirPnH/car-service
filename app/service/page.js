import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import OurService from "../component/OurService";
import Booking from "../component/Booking";
import TestimonialCarousel from "../component/Testimonial";



const ServicePage=()=>{
    return(
        <div>
            <div className="w-full bg-cover bg-center mb-5" style={{backgroundImage: 'url("/img/carousel-bg-2.jpg")'}}>
  <div className="bg-black/70  py-10 sm:py-20">
    <div className="container mx-auto text-center">
      {/* Heading */}
      <h1 className=" text-4xl sm:text-6xl font-semibold text-white mb-3 animate-slide-in-down">
        Service
      </h1>
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="flex justify-center items-center space-x-3 text-sm uppercase text-white pt-2">
          <li>
            <Link href={"/"} className="text-[#D81324] text-lg">Home </Link>
          </li>
          <li><FaChevronRight /></li>
          <li className="text-white text-lg"> Service</li>
        </ol>
      </nav>
    </div>
  </div>
</div>

<OurService/>
<Booking/>
<TestimonialCarousel/>
        </div>


    )
}
export default ServicePage;