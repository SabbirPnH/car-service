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
import TestimonialCarousel from "./component/Testimonial";
import CarCollecation from "./component/CarCollection";
import JeebCollection from "./component/JeebCollection";
import MiniTruckCollection from "./component/MiniTruckCollection";


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
   <CarCollecation/>
   <JeebCollection/>
   <MiniTruckCollection/>
  <OurService/>
  <Booking/>
  <TechniciansTeam/>
  <TestimonialCarousel/>
   </main>
  );
}
