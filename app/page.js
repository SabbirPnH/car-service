'use client'
import { Header } from "./component/Header";
import Hero from "./component/HeroSection";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Count from "./component/Count";
import FeatureProduct from "./component/FeatureProduct";
import CategoryProduct from "./component/CategoryProduct";
import ClientCrousel from "./component/ClientReview";
import NewsLatter from "./component/NewsLatter";
import Team from "./component/Team";
import Blog from "./component/Blog";
import Barnd from "./component/Barnd";




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
    <Count/>
    <Hero/>
    <FeatureProduct/>
    <CategoryProduct/>
    <ClientCrousel/>
    <NewsLatter/>
    <Team/>
    <Blog/>
    <Barnd/>
   </main>
  );
}
