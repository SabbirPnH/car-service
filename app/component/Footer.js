import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="pt-16 pb-7 bg-black text-white">
      <div className=" px-4 sm:px-14">
        <div className="grid grid-cols-1 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 divide-gray-200 pb-10 lg:pb-14 border-b-2 border-gray-200">
          <div className="lg:col-span-7 pr-9 xl:pr-16">
            <h5 className="text-lg font-medium text-white max-md:text-center mb-7">
              Contact
            </h5>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 border-b-2 border-gray-200">
              <div className="flex flex-col cursor-pointer md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0002 1.83398C7.79102 1.83398 6.00016 3.62485 6.00016 5.83398C6.00016 7.81598 7.44169 9.46129 9.3335 9.77868V11.8438C8.15165 11.8773 6.58573 12.0034 5.21484 12.3198C4.3956 12.5089 3.59344 12.7773 2.98057 13.1696C2.3658 13.5632 1.8335 14.1587 1.8335 15.0007C1.8335 15.4261 2.03957 15.8389 2.35737 16.1901C2.68091 16.5477 3.15401 16.8824 3.78679 17.1701C5.05045 17.7444 7.02988 18.1673 10.0002 18.1673C11.2802 18.1673 13.2118 18.0404 14.8432 17.6489C15.6539 17.4543 16.4414 17.1828 17.0417 16.795C17.6411 16.4076 18.1668 15.8234 18.1668 15.0007C18.1668 14.3531 17.7301 13.63 16.8682 13.0593C15.9939 12.4806 14.6234 12.0086 12.5555 11.8363C12.1886 11.8057 11.8664 12.0784 11.8358 12.4453C11.8052 12.8122 12.0779 13.1344 12.4448 13.165C14.3769 13.326 15.5064 13.7569 16.1321 14.1711C16.7702 14.5936 16.8335 14.9538 16.8335 15.0007C16.8335 15.1779 16.7342 15.4062 16.318 15.6751C15.9026 15.9435 15.2839 16.172 14.5321 16.3524C13.0385 16.7109 11.2202 16.834 10.0002 16.834C7.13711 16.834 5.36654 16.4235 4.33853 15.9562C3.82549 15.723 3.51733 15.4848 3.34608 15.2956C3.18432 15.1168 3.16835 15.0108 3.16683 15.0007C3.16683 14.8009 3.27689 14.5631 3.69944 14.2926C4.1239 14.0209 4.75403 13.7945 5.51465 13.619C6.75956 13.3317 8.21367 13.2112 9.3335 13.1777V13.334C9.3335 13.7022 9.63197 14.0007 10.0002 14.0007C10.3684 14.0007 10.6668 13.7022 10.6668 13.334V9.77868C12.5586 9.46129 14.0002 7.81598 14.0002 5.83398C14.0002 3.62485 12.2093 1.83398 10.0002 1.83398Z"
                    fill="#F5004F"
                  />
                </svg>
                <p className="text-base font-normal text-white hover:text-[#F5004F]">
                  61-A, Elm street, Bangladesh.
                </p>
              </div>
              <div className="flex flex-col cursor-pointer md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M7.18848 2.51372C6.28217 1.60741 4.81275 1.60741 3.90644 2.51372C2.03119 4.38896 2.03119 7.42934 3.90644 9.30459L11.3627 16.7609C13.238 18.6361 16.2784 18.6361 18.1536 16.7609C19.0599 15.8546 19.0599 14.3852 18.1536 13.4788L16.0824 11.4077C15.351 10.6763 14.1653 10.6763 13.4339 11.4077C13.2233 11.6183 12.8817 11.6183 12.671 11.4077L8.91853 7.65514C8.70787 7.44448 8.70787 7.10293 8.91853 6.89227C9.64989 6.1609 9.64989 4.97513 8.91853 4.24377L7.18848 2.51372Z"
                    fill="#F5004F"
                  />
                </svg>
                <p className="text-base font-normal text-white hover:text-[#F5004F] select-all">
                  +81 568 789 958
                </p>
              </div>
              <div className="flex flex-col cursor-pointer md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M0.980369 2.24792C1.71093 1.28666 2.86648 0.666016 4.16699 0.666016H12.5003C13.7782 0.666016 14.9162 1.26527 15.6485 2.19809C15.6369 2.2106 15.6257 2.22364 15.615 2.23721L14.8684 3.18004L13.1551 5.20653C12.1329 6.41561 11.7452 6.85169 11.2425 7.08496C10.7399 7.31822 10.1565 7.33272 8.57326 7.33273H8.09451C6.51086 7.33271 5.92743 7.31822 5.42467 7.08486C4.92191 6.8515 4.53424 6.41525 3.51199 5.20572L1.80012 3.18021L1.79155 3.17028L0.980369 2.24792Z"
                    fill="#F5004F"
                  />
                  <path
                    d="M0.331033 3.52856C0.224291 3.88909 0.166992 4.27086 0.166992 4.66602V11.3327C0.166992 13.5418 1.95785 15.3327 4.16699 15.3327H12.5003C14.7095 15.3327 16.5003 13.5418 16.5003 11.3327V4.66602C16.5003 4.25643 16.4388 3.86122 16.3244 3.48914L15.9071 4.01614C15.9027 4.02173 15.8981 4.02725 15.8935 4.0327L14.0746 6.18411C13.1883 7.23323 12.6064 7.92194 11.8038 8.29441C11.0011 8.66689 10.0995 8.66657 8.7261 8.6661L7.94163 8.6661C6.56792 8.66657 5.66611 8.66688 4.86332 8.29426C4.06053 7.92164 3.47866 7.23268 2.5923 6.18317L0.786009 4.04589L0.331033 3.52856Z"
                    fill="#F5004F"
                  />
                </svg>
                <p className="text-base font-normal text-white hover:text-[#F5004F] select-all">
                  info@domain.com
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-14 xl:gap-24 pt-14">
              <div className="block">
                <h6 className="text-lg font-medium text-white mb-7 max-md:text-center">
                  Quick Links
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Home
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      About
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium text-white max-md:text-center mb-7">
                  Products
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Drink
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Pear
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      Juice
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      {" "}
                      Taste Capsicum
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      {" "}
                      Bokchoy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium text-white max-md:text-center mb-7">
                  My Accounts
                </h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      My Orders
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      My Credit Slips
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      My Address
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      My Personal Info Guide
                    </a>
                  </li>
                  <li className="transition-all duration-300 flex items-center left-0 hover:left-1.5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="inline mr-2 h-4 w-4"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    <a
                      href="javascript:void(0)"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-[#F5004F] focus-within:outline-0 focus-within:text-[#F5004F]"
                    >
                      My Contact Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5  lg:pl-9 xl:pl-16 col-start-1 max-lg:row-start-1">
            <Image
              className="h-52 cursor-pointer"
              src="/img/footerlogo.png"
              alt="payment-list.png"
              width={400}
              height={400}
            />

            <p className="text-base font-normal text-gray-500 max-md:text-center mb-8 line-clamp-3 sm:line-clamp-none">
              They encompass a wide range of dishes made primarily from
              vegetables, showcasing their versatility and rich flavors. From
              vibrant salads and hearty soups to innovative stir-fries and
              wholesome stews, vegetable-based foods{" "}
            </p>

            <div className="flex items-center max-md:justify-center gap-5">
              <a
                href="javascript:;"
                className="p-2 text-white rounded-full transition-all duration-500 bg-[#F5004F] focus-within:bg-[#F5004F] focus-within:outline-0 hover:text-black focus-within:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13.5854 10.7242L19.79 3.66699H18.3197L12.9323 9.79466L8.62939 3.66699H3.6665L10.1733 12.9331L3.6665 20.3337H5.13687L10.8261 13.8626L15.3703 20.3337H20.3332L13.5851 10.7242H13.5854ZM11.5716 13.0147L10.9123 12.092L5.66666 4.75005H7.92505L12.1583 10.6753L12.8176 11.598L18.3204 19.2999H16.062L11.5716 13.0151V13.0147Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="p-2 h-10 w-10 flex items-center justify-center text-white rounded-full transition-all duration-500 bg-[#F5004F] focus-within:outline-0 focus-within:bg-[#F5004F] hover:text-black focus-within:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.14869 8.92708C6.14869 7.39302 7.3927 6.14908 8.92769 6.14908C10.4627 6.14908 11.7074 7.39302 11.7074 8.92708C11.7074 10.4611 10.4627 11.7051 8.92769 11.7051C7.3927 11.7051 6.14869 10.4611 6.14869 8.92708ZM4.64605 8.92708C4.64605 11.2904 6.56294 13.2061 8.92769 13.2061C11.2924 13.2061 13.2093 11.2904 13.2093 8.92708C13.2093 6.56375 11.2924 4.64802 8.92769 4.64802C6.56294 4.64802 4.64605 6.56375 4.64605 8.92708ZM12.3782 4.47835C12.3781 4.67613 12.4368 4.86949 12.5466 5.03399C12.6565 5.19848 12.8127 5.32672 12.9955 5.40248C13.1783 5.47824 13.3795 5.49812 13.5736 5.45961C13.7678 5.42111 13.9461 5.32594 14.0861 5.18614C14.2261 5.04634 14.3214 4.8682 14.3601 4.67423C14.3988 4.48027 14.3791 4.27919 14.3034 4.09644C14.2278 3.91368 14.0996 3.75745 13.9351 3.6475C13.7706 3.53756 13.5771 3.47883 13.3792 3.47875H13.3788C13.1136 3.47887 12.8592 3.58422 12.6716 3.77164C12.484 3.95906 12.3785 4.21324 12.3782 4.47835V4.47835ZM5.559 15.7102C4.74605 15.6732 4.30418 15.5379 4.01054 15.4235C3.62124 15.2721 3.34347 15.0917 3.05143 14.8002C2.75939 14.5087 2.57861 14.2314 2.42772 13.8423C2.31326 13.549 2.17784 13.1073 2.14089 12.2948C2.10046 11.4164 2.09239 11.1525 2.09239 8.92715C2.09239 6.70175 2.10113 6.43862 2.14089 5.55948C2.17791 4.74702 2.31432 4.30615 2.42772 4.01195C2.57928 3.62288 2.75979 3.34528 3.05143 3.05342C3.34307 2.76155 3.62057 2.58088 4.01054 2.43008C4.30405 2.31568 4.74605 2.18035 5.559 2.14342C6.43793 2.10302 6.70195 2.09495 8.92769 2.09495C11.1534 2.09495 11.4177 2.10368 12.2974 2.14342C13.1103 2.18042 13.5515 2.31675 13.8458 2.43008C14.2351 2.58088 14.5129 2.76195 14.8049 3.05342C15.097 3.34488 15.2771 3.62288 15.4287 4.01195C15.5431 4.30528 15.6785 4.74702 15.7155 5.55948C15.7559 6.43862 15.764 6.70175 15.764 8.92715C15.764 11.1525 15.7559 11.4157 15.7155 12.2948C15.6785 13.1073 15.5424 13.5489 15.4287 13.8423C15.2771 14.2314 15.0966 14.509 14.8049 14.8002C14.5133 15.0914 14.2351 15.2721 13.8458 15.4235C13.5523 15.5379 13.1103 15.6733 12.2974 15.7102C11.4184 15.7506 11.1544 15.7587 8.92769 15.7587C6.70095 15.7587 6.43766 15.7506 5.559 15.7102V15.7102ZM5.48996 0.644217C4.6023 0.684617 3.99573 0.825283 3.46601 1.03128C2.91742 1.24402 2.45301 1.52942 1.98893 1.99248C1.52485 2.45555 1.24001 2.92042 1.02715 3.46868C0.821028 3.99842 0.680277 4.60428 0.639852 5.49142C0.598761 6.37995 0.589355 6.66402 0.589355 8.92708C0.589355 11.1901 0.598761 11.4742 0.639852 12.3627C0.680277 13.2499 0.821028 13.8557 1.02715 14.3855C1.24001 14.9334 1.52492 15.3988 1.98893 15.8617C2.45294 16.3245 2.91742 16.6096 3.46601 16.8229C3.99673 17.0289 4.6023 17.1695 5.48996 17.2099C6.37949 17.2503 6.66326 17.2604 8.92769 17.2604C11.1921 17.2604 11.4763 17.251 12.3654 17.2099C13.2531 17.1695 13.8593 17.0289 14.3894 16.8229C14.9376 16.6096 15.4024 16.3247 15.8664 15.8617C16.3305 15.3986 16.6148 14.9334 16.8282 14.3855C17.0343 13.8557 17.1758 13.2499 17.2155 12.3627C17.2559 11.4735 17.2654 11.1901 17.2654 8.92708C17.2654 6.66402 17.2559 6.37995 17.2155 5.49142C17.1751 4.60422 17.0343 3.99808 16.8282 3.46868C16.6148 2.92075 16.3298 2.45628 15.8664 1.99248C15.4031 1.52868 14.9376 1.24402 14.39 1.03128C13.8593 0.825283 13.2531 0.68395 12.3661 0.644217C11.477 0.603817 11.1928 0.59375 8.92836 0.59375C6.66393 0.59375 6.37949 0.60315 5.48996 0.644217Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6.14869 8.92708C6.14869 7.39302 7.3927 6.14908 8.92769 6.14908C10.4627 6.14908 11.7074 7.39302 11.7074 8.92708C11.7074 10.4611 10.4627 11.7051 8.92769 11.7051C7.3927 11.7051 6.14869 10.4611 6.14869 8.92708ZM4.64605 8.92708C4.64605 11.2904 6.56294 13.2061 8.92769 13.2061C11.2924 13.2061 13.2093 11.2904 13.2093 8.92708C13.2093 6.56375 11.2924 4.64802 8.92769 4.64802C6.56294 4.64802 4.64605 6.56375 4.64605 8.92708ZM12.3782 4.47835C12.3781 4.67613 12.4368 4.86949 12.5466 5.03399C12.6565 5.19848 12.8127 5.32672 12.9955 5.40248C13.1783 5.47824 13.3795 5.49812 13.5736 5.45961C13.7678 5.42111 13.9461 5.32594 14.0861 5.18614C14.2261 5.04634 14.3214 4.8682 14.3601 4.67423C14.3988 4.48027 14.3791 4.27919 14.3034 4.09644C14.2278 3.91368 14.0996 3.75745 13.9351 3.6475C13.7706 3.53756 13.5771 3.47883 13.3792 3.47875H13.3788C13.1136 3.47887 12.8592 3.58422 12.6716 3.77164C12.484 3.95906 12.3785 4.21324 12.3782 4.47835V4.47835ZM5.559 15.7102C4.74605 15.6732 4.30418 15.5379 4.01054 15.4235C3.62124 15.2721 3.34347 15.0917 3.05143 14.8002C2.75939 14.5087 2.57861 14.2314 2.42772 13.8423C2.31326 13.549 2.17784 13.1073 2.14089 12.2948C2.10046 11.4164 2.09239 11.1525 2.09239 8.92715C2.09239 6.70175 2.10113 6.43862 2.14089 5.55948C2.17791 4.74702 2.31432 4.30615 2.42772 4.01195C2.57928 3.62288 2.75979 3.34528 3.05143 3.05342C3.34307 2.76155 3.62057 2.58088 4.01054 2.43008C4.30405 2.31568 4.74605 2.18035 5.559 2.14342C6.43793 2.10302 6.70195 2.09495 8.92769 2.09495C11.1534 2.09495 11.4177 2.10368 12.2974 2.14342C13.1103 2.18042 13.5515 2.31675 13.8458 2.43008C14.2351 2.58088 14.5129 2.76195 14.8049 3.05342C15.097 3.34488 15.2771 3.62288 15.4287 4.01195C15.5431 4.30528 15.6785 4.74702 15.7155 5.55948C15.7559 6.43862 15.764 6.70175 15.764 8.92715C15.764 11.1525 15.7559 11.4157 15.7155 12.2948C15.6785 13.1073 15.5424 13.5489 15.4287 13.8423C15.2771 14.2314 15.0966 14.509 14.8049 14.8002C14.5133 15.0914 14.2351 15.2721 13.8458 15.4235C13.5523 15.5379 13.1103 15.6733 12.2974 15.7102C11.4184 15.7506 11.1544 15.7587 8.92769 15.7587C6.70095 15.7587 6.43766 15.7506 5.559 15.7102V15.7102ZM5.48996 0.644217C4.6023 0.684617 3.99573 0.825283 3.46601 1.03128C2.91742 1.24402 2.45301 1.52942 1.98893 1.99248C1.52485 2.45555 1.24001 2.92042 1.02715 3.46868C0.821028 3.99842 0.680277 4.60428 0.639852 5.49142C0.598761 6.37995 0.589355 6.66402 0.589355 8.92708C0.589355 11.1901 0.598761 11.4742 0.639852 12.3627C0.680277 13.2499 0.821028 13.8557 1.02715 14.3855C1.24001 14.9334 1.52492 15.3988 1.98893 15.8617C2.45294 16.3245 2.91742 16.6096 3.46601 16.8229C3.99673 17.0289 4.6023 17.1695 5.48996 17.2099C6.37949 17.2503 6.66326 17.2604 8.92769 17.2604C11.1921 17.2604 11.4763 17.251 12.3654 17.2099C13.2531 17.1695 13.8593 17.0289 14.3894 16.8229C14.9376 16.6096 15.4024 16.3247 15.8664 15.8617C16.3305 15.3986 16.6148 14.9334 16.8282 14.3855C17.0343 13.8557 17.1758 13.2499 17.2155 12.3627C17.2559 11.4735 17.2654 11.1901 17.2654 8.92708C17.2654 6.66402 17.2559 6.37995 17.2155 5.49142C17.1751 4.60422 17.0343 3.99808 16.8282 3.46868C16.6148 2.92075 16.3298 2.45628 15.8664 1.99248C15.4031 1.52868 14.9376 1.24402 14.39 1.03128C13.8593 0.825283 13.2531 0.68395 12.3661 0.644217C11.477 0.603817 11.1928 0.59375 8.92836 0.59375C6.66393 0.59375 6.37949 0.60315 5.48996 0.644217Z"
                    fill=""
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_539_510"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(2.80495 17.3391) scale(21.77 21.7569)"
                    >
                      <stop offset="0.09" stop-color="#FA8F21" />
                      <stop offset="0.78" stop-color="#D82D7E" />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_539_510"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(10.703 18.0858) scale(17.1578 17.1475)"
                    >
                      <stop
                        offset="0.64"
                        stop-color="#8C3AAA"
                        stop-opacity="0"
                      />
                      <stop offset="1" stop-color="#8C3AAA" />
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              <a
                href="javascript:;"
                className="p-2 text-white rounded-full transition-all duration-500 bg-[#F5004F] focus-within:bg-[#F5004F] focus-within:outline-0 hover:text-black focus-within:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.4977 12.8803L15.9326 10.1198H13.2539V8.32546C13.2539 7.57064 13.6278 6.83307 14.8237 6.83307H16.0587V4.48234C15.3395 4.36776 14.6128 4.30577 13.8844 4.29688C11.6797 4.29687 10.2403 5.62104 10.2403 8.0149V10.1198H7.79639V12.8803H10.2403V19.5572H13.2539V12.8803H15.4977Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                className="p-2 text-white group rounded-full transition-all duration-500 bg-[#F5004F] focus-within:bg-[#F5004F] focus-within:outline-0 hover:text-black focus-within:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.953 4.57c-.885.392-1.83.656-2.828.775 1.017-.609 1.798-1.573 2.164-2.723-.951.564-2.005.974-3.127 1.197-.896-.954-2.174-1.552-3.594-1.552-2.72 0-4.93 2.21-4.93 4.93 0 .39.043.77.127 1.137-4.094-.205-7.73-2.164-10.17-5.144-.427.732-.67 1.581-.67 2.49 0 1.72.875 3.23 2.207 4.11-.81-.026-1.572-.248-2.24-.617v.062c0 2.401 1.71 4.396 3.976 4.85-.416.113-.855.174-1.309.174-.32 0-.632-.031-.939-.09.633 1.977 2.464 3.42 4.629 3.459-1.695 1.328-3.828 2.117-6.151 2.117-.398 0-.79-.023-1.176-.069 2.18 1.397 4.768 2.215 7.558 2.215 9.068 0 14.038-7.514 14.038-14.038 0-.21-.005-.42-.014-.63.964-.695 1.797-1.562 2.462-2.548z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <Image
              className="pt-10"
              src="/img/payment-list.png"
              alt="payment-list.png"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="flex items-center justify-center pt-7">
          <p className="text-sm font-normal text-gray-500">
            <a href="https://pagedone.io/">© Veganfood.</a> 2024, All rights
            reserved.{" "}
            <span className="cursor-pointer hover:text-[#F5004F]">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
