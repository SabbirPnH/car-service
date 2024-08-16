// import React from 'react'

// export default function NewsLatter() {
//   const backgroundImage = '/img/newsbg.jpg';

//   return (
//     <div
//       style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      
//     >
//       <div className=" font-[sans-serif] p-6">
//         <div className="grid md:grid-cols-2 items-center sm:gap-12 gap-6 px-4 sm:px-14 min-h-[200px]">
//           <div>
//             <h6 className="sm:text-2xl text-xl text-gray-300 mb-1.5 tracking-wide" data-aos="fade-right"  data-aos-duration="1000">Subscribe to our newsletter</h6>
//             <h3 className="sm:text-5xl text-3xl text-white font-bold uppercase tracking-wider" data-aos="fade-right"  data-aos-duration="2000">Stay connected</h3>
//           </div>

//           <div className="bg-gray-100 flex p-1 rounded-full focus-within:bg-white" data-aos="fade-left"  data-aos-duration="1000">
//             <input
//               type='email'
//               placeholder='Enter your email address'
//               className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
//             />
//             <button
//               type='button'
//               className="bg-[#F5004F] hover:bg-[#68cf49] transition-all text-white font-semibold text-sm rounded-full px-6 py-3" 
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




import React from 'react';

export default function NewsLatter() {
  const backgroundImage = '/img/newsbg.jpg';

  return (
    <div
      className="relative overflow-hidden" // This is necessary for positioning the overlay
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>

      <div className="relative font-[sans-serif] p-6">
        <div className="grid md:grid-cols-2 items-center sm:gap-12 gap-6 px-4 sm:px-14 min-h-[200px]">
          <div>
            <h6 className="sm:text-2xl text-xl text-gray-300 mb-1.5 tracking-wide" data-aos="fade-right" data-aos-duration="1000">Subscribe to our newsletter</h6>
            <h3 className="sm:text-5xl text-3xl text-white font-bold uppercase tracking-wider" data-aos="fade-right" data-aos-duration="2000">Stay connected</h3>
          </div>

          <div className="bg-gray-100 flex p-1 rounded-full focus-within:bg-white" data-aos="fade-left" data-aos-duration="1000">
            <input
              type='email'
              placeholder='Enter your email address'
              className="w-full outline-none bg-transparent text-sm text-gray-800 px-4 py-3"
            />
            <button
              type='button'
              className="bg-[#F5004F] hover:bg-[#68cf49] transition-all text-white font-semibold text-sm rounded-full px-6 py-3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
