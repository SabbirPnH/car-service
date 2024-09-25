'use client'
import { Header } from "./component/Header";
import Hero from "./component/HeroSection";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import FeatureProduct from "./component/FeatureProduct";
import CategoryProduct from "./component/CategoryProduct";
import NewsLatter from "./component/NewsLatter";
import Blog from "./component/Blog";
import Barnd from "./component/Barnd";
import Service from "./component/Service";
import About from "./component/About";
import OurService from "./component/OurService";
import Booking from "./component/Booking";
import TechniciansTeam from "./component/TechniciansTeam";
import Footer from "./component/Footer";
import Counter from "./component/Counter";






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
  <Footer/>
  {/* <TestimonialCarousel/> */}
    {/* <FeatureProduct/>
    <CategoryProduct/>
    <ClientCrousel/>
    <NewsLatter/>
    <Team/>
    <Blog/> */}
    {/* <Barnd/> */}
   </main>
  );
}
