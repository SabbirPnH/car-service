import { FaChevronRight } from "react-icons/fa6";
import Service from "../component/Service";
import Link from "next/link";
import About from "../component/About";
import Counter from "../component/Counter";
import TechniciansTeam from "../component/TechniciansTeam";

export async function generateMetadata() {
  return {
    title: 'About Page',
    description: "Generated by create About Page",
  }
}

const AboutPage=()=>{
    return(
        <div>
            <div className="w-full bg-cover bg-center mb-5" style={{backgroundImage: 'url("/img/carousel-bg-1.jpg")'}}>
  <div className="bg-black/70  py-10 sm:py-20">
    <div className="container mx-auto text-center">
      {/* Heading */}
      <h1 className=" text-4xl sm:text-6xl font-semibold text-white mb-3 animate-slide-in-down">
        About Us
      </h1>
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="flex justify-center items-center space-x-3 text-sm uppercase text-white pt-2">
          <li>
            <Link href={"/"} className="text-[#D81324] text-lg">Home </Link>
          </li>
          <li><FaChevronRight /></li>
          <li className="text-white text-lg"> About</li>
        </ol>
      </nav>
    </div>
  </div>
</div>

<Service/>
<About/>
<Counter/>
<TechniciansTeam/>
        </div>


    )
}
export default AboutPage