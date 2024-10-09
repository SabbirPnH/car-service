import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const placeData = [
	{
		price: "$325",
		img: "/img/4.png",
		name: "Toledo",
		location: "United State",
	},
	{
		price: "$325",
		img: "/img/3__1_-removebg-preview.png",
		name: "Noonu Atoll",
		location: "United State",
	},
	{
		price: "$325",
		img: "/img/2.jpg",
		name: "Toledo",
		location: "United State",
	},
	{
		price: "$325",
		img: "/img/4.png",
		name: "Kaafu Atoll",
		location: "United State",
	},
	
];

const PlaceItem = ({ data }) => {
	return (
		<div className="dark:bg-[#404156] shadow-sm border-none rounded-none mt-4">

			<div className="relative">
				<Image src={data.img} alt="" className="w-full h-56 sm:h-auto" width={400} height={400}/>
				
			</div>
			
		</div>
	);
};
PlaceItem.propTypes = {
	data: PropTypes.object.isRequired,
};

const CarCollecation = () => {
	return (
		<section className=" bg-white dark:bg-[#2E2F41] text-zinc-900 dark:text-white relative overflow-hidden sm:py-10">
			<div className=" px-4 sm:px-20 ">
                <h1 className="text-[#D81324] font-bold uppercase text-center">Car Collection</h1>
				<div className="grid grid-cols-12 justify-center mb-4 md:mb-5">
				</div>

				<div className="grid grid-cols-12 gap-4">
					{placeData.map((data, i) => (
						<div
							className="col-span-12 md:col-span-6 lg:col-span-3 px-1"
							key={i}
						>
							<PlaceItem data={data} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default CarCollecation;
