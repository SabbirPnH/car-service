import React from "react";
import PropTypes from "prop-types";

const blogs = [
	{
		title:
			"Interview - What it's like to work remorely in big-sized product development?",
		description:
			"This is a factor in the economy of a nation, and the administration takes the major choices.This is a factor in the economy of a nation, and the administration takes the major choices.Banking crises have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.",
		author: "Alan Bell",
		authorImg: "https://cdn.easyfrontend.com/pictures/users/user26.jpg",
		date: "August 10th, 2020",
		image: "/img/Image 2 (1).jpg",
	},
	{
		title:
			"Tellus in metus vulp utate eu scele risque scele viverra mauris in al?",
		description:
			"It’s no secret that the digital responding to the new possibilities available industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering.",
		author: "Finn Alen",
		authorImg: "https://cdn.easyfrontend.com/pictures/users/user27.jpg",
		date: "March 11th, 2020",
		image: "/img/img2.jpg",
	},
];

const BlogItem = ({ blog }) => {
	const { image } = blog;

	return (
		<article>
			<img src={image} alt="" className="max-w-full  rounded-md" />
			
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const ToyotaCorolla = () => {
	return (
		<section className=" light sm:py-10 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
			<div className=" px-4 sm:px-20">
				<div className="grid grid-cols-12 justify-center">
					<div className="col-span-12 ">
                   
					<p className="sm:mb-6 text-[#596277] text-justify sm:text-left tracking-tight">
                    Presenting one of the most freshest ee111 corolla you could find and fully loaded Toyota Corolla 111 Crystal ( Super Fresh Condition) Registration - 2003 ( 15 serial ) Tax Token - 22 November 2024 Fitness - 26 December 2025 Name Transfer must Engine - 4efe (1331cc) Octane Driven Gearbox - Automatic Transmission (Engine Oil and Transmission Oil changed last week) Ac Serviced recently Zero Suspension work required Interior - Beige interior with all auto options Upgrades Ae111GT bumper Ae111GT cluster Celica Steering Enkei Rpf1 wheels with 195/50r15 tyres Roof visor Ae111GT front lip and Side Skirt Remote lock / unlock Auto Trunk
          </p>
					</div>
				</div>

				<div className="grid grid-cols-2 items-center mt-5 gap-6 md:gap-11">
					{blogs.map((blog, i) => (
						<div className="col-span-2 md:col-span-1" key={i}>
							<BlogItem blog={blog} />
						</div>
					))}
				</div>

			</div>
		</section>
	);
};
export default ToyotaCorolla;
