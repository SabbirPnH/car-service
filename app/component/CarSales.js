import React from "react";
import PropTypes from "prop-types";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

const blogs = [
	{
		title: "Long lasting fall scent for women sale offer",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: "Mahws Georgia",
		date: "13 Jan, 2022",
		image: "/img/329327031_1569350586913585_3245061640483344668_n.jpg",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
		author: "Mary Gold",
		date: "27 Oct, 2022",
		image: "/img/323425886_578028190839155_5416551592902691135_n.jpg",
	},
	{
		title: "Dolor sit amet, adiplscing eliyt sed",
		description:
			"Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
		author: "Hardik Finn",
		date: "11 Mar, 2022",
		image: "/img/329254380_755699682246228_8779927137093991786_n.jpg",
	},
];

const BlogItem = ({ blog }) => {
	const { title,  image } = blog;

	return (
		<article className="flex flex-col shadow-lg    overflow-hidden  ">
			<img src={image} alt={title} className="h-auto w-full" />
			
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const FeaturedBlogItem = () => {
	return (
		<article>
			<div className="grid grid-cols-12 items-center gap-6">
				<div className="col-span-12 lg:col-span-7 lg:order-2">
					<img
						src="/img/329044711_873608520577210_1750944093932010886_n.jpg"
						alt=""
						className="max-w-full h-auto rounded"
					/>
				</div>
				<div className="col-span-12 lg:col-span-5 lg:order-1">
					<div className="lg:mt-0 lg:pl-6">
                    <h6 className="text-[#D81324] font-bold uppercase">selling car </h6>
						<p className="font-semibold">Toyota Mark II JZX 90 (Super Fresh Condition)</p>
						<p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Registration</span> - 2000</p>
						<p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Tax Token</span> - Valid until November 2024</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Fitness </span> - Valid until December 2025</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Name</span> Toyota Mark II JZX 90</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Engine</span> - 1JZ-GE (2500cc) Octane Driven</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Gearbox</span>  - Automatic Transmission (Engine Oil and Transmission Oil recently changed)</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">AC</span>  - Serviced Recently</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Suspension</span>  - Zero Suspension work required</p>
                        <p className=" text-[#596277] tracking-tight text-sm"><span className="font-semibold">Interior </span> - Black interior with all auto options</p>
                        <h2 className="font-semibold py-2">Upgrades:</h2>
					<div className="ml-7">
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">JZX100 Chaser bumper</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">JZX90 Turbo cluster</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">TRD Steering Wheel</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">Work emotion CR Kai wheels with 215/45r18 tire</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">JZX90 Side Skirts and Rear Lip</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">Remote lock/unlock</p>
                      </div>
                      <div className="flex items-center gap-3">
                      <MdPlaylistAddCheckCircle  className="text-[#D81324]"/>
                      <p className="text-sm text-[#596277]">Auto Trunk</p>
                      </div>
                    </div>
					</div>
				</div>
			</div>
		</article>
	);
};

const CarSales = () => {
	return (
		<section className=" light py-10 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className="px-4 sm:px-20">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:col-end-11 text-center">
                    <h1 className="mb-5 text-2xl sm:text-4xl font-semibold pt-2 text-center text-[#0B2154]">Explore Our Premium Car Collection</h1>
					<p className="sm:mb-6 text-[#596277] sm:px-20 text-justify sm:text-left tracking-tight">
                    Use our sorting options to filter by make, model, year, price, and more. Our intuitive system allows you to quickly narrow down to exactly what you’re looking for, making your car-buying journey smooth and efficient.
          </p>
						
					</div>
				</div>

				<div className="grid grid-cols-12 items-center mt-12 gap-6">
					<div className="col-span-12">
						<FeaturedBlogItem />
					</div>
					{blogs.map((blog, i) => (
						<div
							className="col-span-12 md:col-span-6 lg:col-span-4 h-full mt-6"
							key={i}
						>
							<BlogItem blog={blog} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default CarSales;