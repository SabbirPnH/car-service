
const Booking = () => {
  return (
    <div
      className="relative animate-fadeInUp"
      style={{
        backgroundImage: "url('/img/carousel-bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative flex flex-wrap px-4 sm:px-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 sm:my-10 lg:pr-16  py-10">
          <h1 className="text-white mb-4 text-xl text-justify sm:text-4xl font-bold sm:leading-[50px]">
            Certified and Award Winning Car Repair Service Provider
          </h1>
          <p className="text-white text-justify">
          Book for a Service: Schedule your vehicle&aposs maintenance or repair easily with our online booking system. Choose a convenient time that fits your schedule, and our expert technicians will ensure your car receives top-notch care. Whether its routine maintenance or specialized services, we prioritize your vehicle&aposs performance and safety. 
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#D81324] h-full flex flex-col justify-center text-center p-10">
            <h1 className="text-white mb-6 text-xl sm:text-4xl font-bold">Book For A Service</h1>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <input
                  type="text"
                  className="form-control border-0 bg-white p-4 text-[#596277]  placeholder:text-[#596277] outline-none"
                  placeholder="Your Name"
                />
                {/* Email */}
                <input
                  type="email"
                  className="form-control border-0 bg-white p-4 text-[#596277]  placeholder:text-[#596277] outline-none"
                  placeholder="Your Email"
                />
                {/* Select Service */}
                <select className="form-control border-0 bg-white p-4 text-[#596277] outline-none ">
                  <option selected >Select A Service</option>
                  <option value={1}>Engine Services</option>
                  <option value={2}>Tires & Wheels</option>
                  <option value={3}>Preventative Maintenance</option>
                </select>
                {/* Service Date */}
                <input
                  type="text"
                  className="form-control border-0 bg-white p-4 text-[#596277]  placeholder:text-[#596277] outline-none"
                  placeholder="Service Date"
                />
              </div>
              {/* Special Request */}
              <textarea
                className="form-control w-full border-0 bg-white mt-4 p-4 text-[#596277]  placeholder:text-[#596277] outline-none"
                placeholder="Special Request"
                defaultValue={""}
              />
              {/* Book Now Button */}
              <button className="bg-[#0B2154] text-white w-full py-4 mt-4 font-semibold">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
