'use client'
import { Header } from "./component/Header";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Service from "./component/Service";
import About from "./component/About";
import OurService from "./component/OurService";
import Booking from "./component/Booking";
import TestimonialCarousel from "./component/Testimonial";
import CarSales from "./component/CarSales";
import Toyota from "./component/Toyota";
import ToyotaCorolla from "./component/ToyotaCorolla";



export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
   <main >
    <Header/>
   <Service/>
   <About/>
  <OurService/>
  <CarSales/>
  <Toyota/>
  <ToyotaCorolla/>
  <Booking/>
  

  <TestimonialCarousel/>
   </main>
  );
}
