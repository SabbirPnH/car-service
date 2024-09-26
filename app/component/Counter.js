"use client"
import { FaCheck, FaUsersCog, FaUsers, FaCar } from 'react-icons/fa';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="relative my-10 py-10" style={{
      backgroundImage: "url('/img/carousel-bg-1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative px-4 sm:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fact Item 1 */}
          <div className="flex flex-col items-center text-center" data-wow-delay="0.1s">
            <FaCheck className="text-4xl text-white mb-4" />
            <h2 className="text-white text-3xl font-bold mb-2">
              <CountUp end={1234} duration={3} />
            </h2>
            <p className="text-white mb-0">Years Experience</p>
          </div>
          {/* Fact Item 2 */}
          <div className="flex flex-col items-center text-center" data-wow-delay="0.3s">
            <FaUsersCog className="text-4xl text-white mb-4" />
            <h2 className="text-white text-3xl font-bold mb-2">
              <CountUp end={1234} duration={3} />
            </h2>
            <p className="text-white mb-0">Expert Technicians</p>
          </div>
          {/* Fact Item 3 */}
          <div className="flex flex-col items-center text-center" data-wow-delay="0.5s">
            <FaUsers className="text-4xl text-white mb-4" />
            <h2 className="text-white text-3xl font-bold mb-2">
              <CountUp end={1234} duration={3} />
            </h2>
            <p className="text-white mb-0">Satisfied Clients</p>
          </div>
          {/* Fact Item 4 */}
          <div className="flex flex-col items-center text-center" data-wow-delay="0.7s">
            <FaCar className="text-4xl text-white mb-4" />
            <h2 className="text-white text-3xl font-bold mb-2">
              <CountUp end={1234} duration={3} />
            </h2>
            <p className="text-white mb-0">Complete Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
