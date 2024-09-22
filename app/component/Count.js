
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
