import React from 'react';
import Devider from './Devider';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    imageSrc: '/img/blog (2).jpg',
    date: 'June 10, 2024',
    title: 'Salads and Grain Bowls',
    description: 'Packed with nutrients and great for smoothies, salads, or sautéing.',
  },
  {
    id: 2,
    imageSrc: '/img/blog (1).jpg',
    date: 'April 20, 2024',
    title: 'Vegetarian Stews and Casseroles',
    description: 'A versatile ingredient for sauces, salads, and sandwiches, full of flavor and vitamins.',
  },
  {
    id: 3,
    imageSrc: '/img/blog (3).jpg',
    date: 'August 16, 2024',
    title: 'Hearty Vegetable Soups',
    description: 'Rich in vitamins and perfect for snacking or adding a crunch to salads.',
  },
];

export default function Blog() {
  return (
    <div className="bg-[#f0f8ff] mt-4 px-4 sm:px-14 py-10 font-[sans-serif]">
      <div>
        <h2 className="text-2xl md:text-5xl font-bold leading-tight capitalize" data-aos="zoom-in" data-aos-duration="2500">latest blogs</h2>
        <Devider />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white cursor-pointer rounded overflow-hidden group relative">
              <div className="relative overflow-hidden">
                <Image
                width={700}
                height={700}
                  src={post.imageSrc}
                  alt={`Blog Post ${post.id}`}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-[#F5004F] absolute bottom-0 right-0">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333] hover:text-[#68cf49]">{post.title}</h3>
                <p className='text-gray-600 hover:underline hover:text-[#F5004F]'>{post.description}</p>
                <button
                  type="button"
                  className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#F5004F] "
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
