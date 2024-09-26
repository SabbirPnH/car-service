'use client'
import { Header } from "./component/Header";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Service from "./component/Service";
import About from "./component/About";
import OurService from "./component/OurService";
import Booking from "./component/Booking";
import TechniciansTeam from "./component/TechniciansTeam";
import Counter from "./component/Counter";
import TestimonialCarousel from "./component/Testimonial";


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
   <Counter/>
  <OurService/>
  <Booking/>
  <TechniciansTeam/>
  <TestimonialCarousel/>
   </main>
  );
}
