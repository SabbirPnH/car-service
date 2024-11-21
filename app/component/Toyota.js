import React from "react";
import PropTypes from "prop-types";

const blogs = [
	{
		title: "Beautiful Woman Smiling With Hands In Hair",
		description:
			"It’s no secret that the digital industry is booming. From exciting startups to global brands.",
		author: "Ben Stokes",
		image: "/img/273465264_5006039046122018_8335814701670957599_n.jpg",
		date: "26",
		month: "Oct",
		year: "2016",
	},
	{
		title: "Not Your Regular Home Decoration?",
		description:
			"Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
		author: "Moein Ali",
		image: "/img/gari.png",
		date: "11",
		month: "May",
		year: "2020",
	},
	{
		title: "Fashion Essentials All Men Should Know",
		description:
			"Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
		author: "Maxy Paulo",
		image: "/img/273092493_7327135320693739_3809873920081511944_n.jpg",
		date: "19",
		month: "Mar",
		year: "2021",
	},
];

const BlogItem = ({ blog }) => {
	const { title, image } = blog;

	return (
		<article className="rounded-lg shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none overflow-hidden ">
			<div className="relative">
				<img
					src={image}
					alt={title}
					className=" w-full shadow-lg dark:shadow-none"
				/>
			</div>
		</article>
	);
};

BlogItem.propTypes = {
	blog: PropTypes.object.isRequired,
};

const Toyota = () => {
	return (
		<section className=" light text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white">
			

			<div >
				<div className=" px-4 sm:px-20">
					<div className="grid grid-cols-12 justify-center">
						<div className="col-span-12 lg:col-span-8">
                        <h1 className="mb-5 text-2xl sm:text-4xl font-semibold pt-2  text-[#0B2154]">Toyota Corolla ae91 ( 31 serial )</h1>
                        <p className=" text-[#596277] text-justify tracking-tight">
                        Mint condition toyota corolla ae91 for sale Papers updated Retract mirror All auto Gear 5 speed manual 1500cc Papers Uptodate ( Name transfer possible ) New Maroon dashboard Fresh doorpads USDM cluster 4 brand new tyres with enkei 14s genuine wheels Complete brand new shocks with original ae91 springs , Also brand new engine mountings so zero vibrations No cabin noise or issues
          </p>
						
						</div>
					</div>

					<div className="grid grid-cols-6 mt-12 gap-6">
						{blogs.map((blog, i) => (
							<div
								className="col-span-6 md:col-span-3 lg:col-span-2 mb-3"
								key={i}
							>
								<BlogItem blog={blog} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Toyota ;
