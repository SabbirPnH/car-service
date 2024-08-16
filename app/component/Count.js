// import Image from 'next/image'
// import React from 'react'

// export default function Count() {
//   return (
// <div class="py-5 sm:py-10 ">
//   <div class="mx-auto max-w-9xl px-4 sm:px-6">
//     <div class=" max-w-2xl lg:max-w-none">
     
//       <dl class="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
//         <div className='flex items-center bg-gray-100 justify-center'>
//             <div>
//                 <Image src='/img/return.png' width={70} height={50} alt=''/>
//             </div>
//             <div class="flex flex-col  p-8">
//           <dt class="text-sm font-semibold leading-6 text-gray-900">words written in 2023</dt>
//           <dd class="order-first text-3xl font-semibold tracking-tight text-black">12 million</dd>
//         </div>
//         </div>
//         <div className='flex items-center bg-gray-100 justify-center'>
//             <div>
//                 <Image src='/img/delivery-box.png' width={70} height={50} alt=''/>
//             </div>
//             <div class="flex flex-col  p-8">
//           <dt class="text-sm font-semibold leading-6 text-gray-900">words written in 2023</dt>
//           <dd class="order-first text-3xl font-semibold tracking-tight text-black">12 million</dd>
//         </div>
//         </div>
//         <div className='flex items-center bg-gray-100 justify-center'>
//             <div>
//                 <Image src='/img/browser.png' width={70} height={50} alt=''/>
//             </div>
//             <div class="flex flex-col  p-8">
//           <dt class="text-sm font-semibold leading-6 text-gray-900">words written in 2023</dt>
//           <dd class="order-first text-3xl font-semibold tracking-tight text-black">12 million</dd>
//         </div>
//         </div>
//         <div className='flex items-center bg-gray-100 justify-center'>
//             <div>
//                 <Image src='/img/cyber-security.png' width={70} height={50} alt=''/>
//             </div>
//             <div class="flex flex-col  p-8">
//           <dt class="text-sm font-semibold leading-6 text-gray-900">words written in 2023</dt>
//           <dd class="order-first text-3xl font-semibold tracking-tight text-black">12 million</dd>
//         </div>
//         </div>
//       </dl>
//     </div>
//   </div>
// </div>
//   )
// }




import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    imageSrc: '/img/return.png',
    altText: 'Return',
    title: 'money back guarantee',
    count: 'Return Policy'
  },
  {
    id: 2,
    imageSrc: '/img/delivery-box.png',
    altText: 'Delivery Box',
    title: 'on all orders over $45.00',
    count: 'free shipping'
  },
  {
    id: 3,
    imageSrc: '/img/browser.png',
    altText: 'Browser',
    title: 'find you nearest store',
    count: 'Store locator'
  },
  {
    id: 4,
    imageSrc: '/img/cyber-security.png',
    altText: 'Cyber Security',
    title: 'your money is 100% secure',
    count: 'secure payment'
  }
];

export default function Count() {
  return (
    <div className="py-5 sm:py-10 bg-white px-4 sm:px-14">
      <div className="mx-auto max-w-9xl ">
        <div className="max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {data.map(item => (
              <div key={item.id} className='flex items-center px-2  bg-[#f0f8ff] justify-center'>
                <div>
                  <Image src={item.imageSrc} width={70} height={50} alt={item.altText} />
                </div>
                <div className="flex flex-col p-8">
                  <dt className="text-sm  font-medium leading-6 text-gray-700">{item.title}</dt>
                  <dd className="order-first sm:text-2xl font-semibold text-gray-900 capitalize tracking-tight ">{item.count}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
