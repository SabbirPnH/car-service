
'use client'
import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import Image from "next/image";


const features = [
	{
		img: '/img/poinsettia.png',
		title: "Hot Spritis",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		img: '/img/nachos.png',
		title: "Packaged Foods",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		img: '/img/diet.png',
		title: "Healthy Drinks",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
	{
		img: '/img/iftar.png',
		title: "Salubrious Snacks",
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	},
];

const FeaturedItem = ({ feature, bgColor }) => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<div
			data-aos={feature.title === 'Hot Spritis' || feature.title === 'Packaged Foods' ? "zoom-out-left" : "zoom-out-right"}
			data-aos-duration="3000"
			className="sm:p-4 mt-4 border-b-2 border-gray-900 lg:mt-0"
		>
			<div className="text-center lg:p-3">
				<div
					className={`w-16 h-16 rounded-full ring-2 ring-gray-900 text-2xl inline-flex items-center justify-center ${bgColor} text-white mb-6`}
				>
					<Image src={feature.img} width={30} height={30} alt="icon-img"/>
				</div>
				<h4
					onClick={handleScrollToTop}
					className="text-2xl tracking-widest uppercase hover:text-[#68cf49] cursor-pointer font-medium mb-4"
				>
					{feature.title}
				</h4>
				<p className="opacity-80">{feature.desc}</p>
			</div>
		</div>
	);
};

FeaturedItem.propTypes = {
	feature: PropTypes.object.isRequired,
	bgColor: PropTypes.string.isRequired,
};

const Hero = () => {
	const [bgColor, setBgColor] = useState('bg-[#F5004F]');

	useEffect(() => {
		const colors = ['bg-[#E4003A]', 'bg-[#FFB801]'];
		let colorIndex = 0;

		const interval = setInterval(() => {
			colorIndex = (colorIndex + 1) % colors.length;
			setBgColor(colors[colorIndex]);
		}, 5000); // Change every 5 seconds

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);
	
	return (
		<section className="bg-[#f0f8ff] text-zinc-900 relative overflow-hidden pt-3 z-10  pb-16 ">
			<div className="relative">
				{/* Left Image */}
				<div className="absolute left-0 top-0 h-full w-1/3">
					<Image width={200} height={200} src="/img/bg (1).png" alt="Left background" className="object-cover  "/>
				</div>
				{/* Right Image */}
				<div className="absolute right-0 top-0 h-full w-1/3">
					<Image width={200} height={200} src="/img/bg (2).png" alt="Right background" className="object-cover  w-96"/>
				</div>
				{/* Content */}
				<div className="relative z-20 px-4 sm:px-14">
					<div className="flex max-w-9xl justify-center text-center mx-auto md:mb-6"></div>
					<div className="grid grid-cols-12 pt-5">
						<div className="col-span-12 lg:col-span-4 lg:order-2">
							<div
								className="bg-center hidden lg:block bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px]"
								style={{ backgroundImage: "url(/img/hero1.png)" }}
							/>
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4">
							{features.slice(0, 2).map((feature, i) => (
								<FeaturedItem feature={feature} bgColor={bgColor} key={i} />
							))}
						</div>
						<div className="col-span-12 md:col-span-6 lg:col-span-4 lg:order-3">
							{features.slice(2).map((feature, i) => (
								<FeaturedItem feature={feature} bgColor={bgColor} key={i} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
