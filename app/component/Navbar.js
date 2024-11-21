
"use client";
import React, { useState, useEffect } from "react";
import { SiGooglemaps } from "react-icons/si";
import { TbClock } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); 
  // Listen for scroll events to hide topbar and make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTopbarVisible(false); // Hide topbar after scrolling down
        setIsNavbarSticky(true); // Make navbar sticky
      } else {
        setIsTopbarVisible(true); // Show topbar at the top
        setIsNavbarSticky(false); // Navbar not sticky
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Topbar - Initially Fixed */}
      <div
        className={`bg-[#f1f5f9]  transition-all duration-300 fixed top-0 w-full z-50  ${isTopbarVisible ? "block" : "hidden"
          }`}
      >
        <div className="hidden lg:flex justify-between items-center px-4 sm:px-10">
          <div className="flex space-x-6">
            <div className="flex items-center py-3">
              <IoMail  className="text-[#D81324] mr-2" />
              <span className="text-sm">samirmotors18@gmail.com</span>
            </div>
           
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center py-3">
              <IoCall className="text-[#D81324] mr-2" />
              <span className="text-sm">Cell: 01716-537772,01616-537772</span>
            </div>
            <div className="flex items-center space-x-2">
              <a className="bg-white text-[#D81324] p-2" href="#">
                <FaFacebookF />
              </a>
              <a className="bg-white text-[#D81324] p-2" href="#">
                <FaTwitter />
              </a>
              <a className="bg-white text-[#D81324] p-2" href="#">
                <FaLinkedinIn />
              </a>
              <a className="bg-white text-[#D81324] p-2" href="#">
                <IoLogoInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`w-full bg-white text-[#0B2154] font-semibold uppercase body-font shadow-sm transition-all duration-300 z-40  ${isNavbarSticky ? "fixed top-0" : "relative"
          } ${isTopbarVisible ? " lg:mt-[50px]" : "mt-0"}`} // Adjust margin-top when topbar is visible or hidden
      >
        <div className=" flex justify-between items-center py-3 px-4 sm:px-10">
          {/* Site Logo and Name */}
         <div className="flex items-center gap-2 sm:gap-4">
         <Link
            href={"/"}
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <Image className="h-12 w-56 sm:w-full" src="/img/sm-motor.png" alt="logo-image" width={400} height={400}/>
            
          </Link>
          
         </div>
        
          {/* Navbar Links */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <Link onClick={() => setActiveLink("/")} href={"/"}>
            <li  className={`mr-8 hover:text-[#D81324] list-none ${activeLink === "/" ? "text-[#D81324]" : "text-[#0B2154]"}`}>
              home
            </li>
            </Link>
            <Link onClick={() => setActiveLink("/about")} href={"/about"}>
            <li  className={`mr-8 hover:text-[#D81324] list-none ${activeLink === "/about" ? "text-[#D81324]" : "text-[#0B2154]"}`}>
              about
            </li>
            </Link>
            <Link onClick={() => setActiveLink("/service")} href={"/service"}>
            <li  className={`mr-8 hover:text-[#D81324] list-none ${activeLink === "/service" ? "text-[#D81324]" : "text-[#0B2154]"}`}>
              service
            </li>
            </Link>
            <Link onClick={() => setActiveLink("/ceo")} href={"/ceo"}>
            <li  className={`mr-8 hover:text-[#D81324] list-none ${activeLink === "/ceo" ? "text-[#D81324]" : "text-[#0B2154]"}`}>
              CEO Message 
            </li>
            </Link>
            <Link onClick={() => setActiveLink("/contact")} href={"/contact"}>
            <li
            
            className={` hover:text-[#D81324] list-none ${activeLink === "/contact" ? "text-[#D81324]" : "text-[#0B2154]"}`}
            >
              Contact
            </li>
            </Link>
          </nav>

          

          {/* Burger icon for mobile */}
          <button
            className="md:hidden rounded-md active:outline-none focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-md text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 rounded-md text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 border-t w-full bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex flex-col py-4 px-3 md:hidden text-base uppercase font-semibold">
           <Link href={"/"}>
           <li
              
              className="block px-3 py-2 text-[#0B2154] hover:text-[#D81324] list-none"
            >
              home
            </li>
           </Link>
           <Link href={"/about"}>
           <li
              
              className="block px-3 py-2 text-[#0B2154] hover:text-[#D81324] list-none"
            >
              about
            </li>
           </Link>
           <Link href={"/service"}>
           <li
              
              className="block px-3 py-2 text-[#0B2154] hover:text-[#D81324] list-none"
            >
              service
            </li>
           </Link>
           <Link href={"/ceo"}>
           <li
              
              className="block px-3 py-2 text-[#0B2154] hover:text-[#D81324] list-none"
            >
            CEO Message 
            </li>
           </Link>
            <Link href={"/contact"}>
            <li
            
              className="block px-3 py-2 text-[#0B2154] hover:text-[#D81324] list-none"
            >
              Contact
            </li>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

