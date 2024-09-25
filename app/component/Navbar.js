
// 'use client';
// import React, { useEffect, useRef } from 'react';
// import '/app/globals.css';
// import Image from 'next/image'; 
// import Link from 'next/link';
// import { SiGooglemaps } from "react-icons/si";
// import { TbClock } from "react-icons/tb";
// import { IoCall } from "react-icons/io5";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { IoLogoInstagram } from "react-icons/io5";
// import "../../app/globals.css"
// // import logo from '/public/img/logo.png'; 
// export default  function Navbar() {

//   const toggleOpenRef = useRef(null);
//   const toggleCloseRef = useRef(null);
//   const collapseMenuRef = useRef(null);
//   const navbarRef = useRef(null); 

//   useEffect(() => {
//     const handleClick = () => {
//       if (collapseMenuRef.current.style.display === 'block') {
//         collapseMenuRef.current.style.display = 'none';
//       } else {
//         collapseMenuRef.current.style.display = 'block';
//       }
//     };

//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         navbarRef.current.classList.add('sticky-navbar');
//       } else {
//         navbarRef.current.classList.remove('sticky-navbar');
//       }
//     };

//     const toggleOpen = toggleOpenRef.current;
//     const toggleClose = toggleCloseRef.current;

//     if (toggleOpen && toggleClose) {
//       toggleOpen.addEventListener('click', handleClick);
//       toggleClose.addEventListener('click', handleClick);
//     }

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       if (toggleOpen && toggleClose) {
//         toggleOpen.removeEventListener('click', handleClick);
//         toggleClose.removeEventListener('click', handleClick);
//       }
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
    
//       <div>
//          {/* Topbar Start */}
//       <div className="bg-gray-100 p-0">
//         <div className="hidden lg:flex justify-between items-center px-6">
//           <div className="flex space-x-6">
//             <div className="flex items-center py-3">
//               <SiGooglemaps className="text-red-600 mr-2" />
//               <span className="text-sm">1258, Dhaka, BANGLADESH</span>
//             </div>
//             <div className="flex items-center py-3">
//               <TbClock className="text-red-600 mr-2" />
//               <span className="text-sm">Mon - Fri : 09.00 AM - 09.00 PM</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="flex items-center py-3">
//               <IoCall className="text-red-600 mr-2" />
//               <span className="text-sm">+012 345 6789</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <a className="bg-white text-red-600 p-2" href="#">
//                 <FaFacebookF />
//               </a>
//               <a className="bg-white text-red-600 p-2" href="#">
//                 <FaTwitter />
//               </a>
//               <a className="bg-white text-red-600 p-2" href="#">
//                 <FaLinkedinIn />
//               </a>
//               <a className="bg-white text-red-600 p-2" href="#">
//                 <IoLogoInstagram />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Topbar End */}

//         <header ref={navbarRef} className="flex   py-4 px-4 sm:px-16 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
//           <div className="flex flex-wrap items-center gap-4 w-full">
//             <Link href={'/'} >
//               <Image src='' alt="logo" className="w-36" /> 
//             </Link>

//             <div
//               id="collapseMenu"
//               ref={collapseMenuRef}
//               className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
//             >
//               <button
//                 id="toggleClose"
//                 ref={toggleCloseRef}
//                 className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
//                   <path
//                     d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                     data-original="#000000"
//                   ></path>
//                   <path
//                     d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                     data-original="#000000"
//                   ></path>
//                 </svg>
//               </button>

//               <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                

//                 <ul className="lg:flex lg:items-center  max-lg:block lg:space-x-8 ml-auto">
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                      Protfolio
//                     </Link>
//                   </li>
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Contact
//                     </Link>
//                   </li>
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Contact
//                     </Link>
//                   </li>
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Contact
//                     </Link>
//                   </li>
//                   <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
//                     <Link href={'#'} className="hover:text-[#1d294f] text-gray-600 block font-bold text-[15px] from-after">
//                       Contact
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

            

//             <div className="flex items-center ml-auto space-x-6">

           

//               <button id="toggleOpen" ref={toggleOpenRef} className="lg:hidden">
//                 <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     fillRule="evenodd"
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </header>
//       </div>
    
//   );
// }


'use client'
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-5 w-full">
        <a href="javascript:void(0)">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-40 max-lg:mr-5"
          />
        </a>
        <div
          id="collapseMenu"
          className={`max-lg:${
            isMenuOpen ? "flex" : "hidden"
          } lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              />
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              />
            </svg>
          </button>
          <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-40"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center max-lg:ml-auto space-x-6">
          <button className="px-4 py-2 text-[15px] rounded font-semibold text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white">
            Sign up
          </button>
          <button id="toggleOpen" className="lg:hidden" onClick={toggleMenu}>
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
