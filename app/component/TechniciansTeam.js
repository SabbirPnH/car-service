
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing React Icons
import Image from 'next/image';

const TechniciansTeam = () => {
  

  return (
    <div className="px-4 sm:px-20 py-12">
      <div className="text-center" data-aos="fade-up" data-aos-delay="100">
        <h6 className="text-[#D81324] font-bold uppercase"> Our Technicians </h6>
        <h1 className=" text-2xl sm:text-4xl font-bold text-[#0B2154] mb-8">Our Expert Technicians</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member */}
        <div className="team-item" data-aos="fade-up" data-aos-delay="100">
          <div className="relative overflow-hidden group">
            <Image className="w-full h-auto" src="/img/team-1.jpg" alt="Team Member 1" width={400} height={400}/>
            <div className="absolute inset-0 bg-[#D81324] bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-opacity-90">
              <div className="opacity-0 transition-all flex gap-5 duration-300 ease-in-out group-hover:opacity-100">
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaFacebookF /> {/* React Icon */}
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaTwitter /> {/* React Icon */}
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaInstagram /> {/* React Icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f5f9] text-center p-4">
            <h5 className="font-bold mb-0 text-lg text-[#0B2154]">John Davis</h5>
            <small className='text-[#596277]'>Service Manager</small>
          </div>
        </div>

        {/* Repeat for other team members with updated hover effect */}
        <div className="team-item" data-aos="fade-up" data-aos-delay="300">
          <div className="relative overflow-hidden group">
            <Image className="w-full h-auto" src="/img/team-2.jpg" alt="Team Member 2" width={400} height={400} />
            <div className="absolute inset-0 bg-[#D81324] bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-opacity-90">
              <div className="opacity-0 transition-all flex gap-5 duration-300 ease-in-out group-hover:opacity-100">
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaFacebookF />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaTwitter />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f5f9] text-center p-4">
            <h5 className="font-bold mb-0 text-lg text-[#0B2154]">Emily Martinez</h5>
            <small className='text-[#596277]'>Service Advisor

            </small>
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="team-item" data-aos="fade-up" data-aos-delay="500">
          <div className="relative overflow-hidden group">
            <Image className="w-full h-auto" src="/img/team-3.jpg" alt="Team Member 3" width={400} height={400} />
            <div className="absolute inset-0 bg-[#D81324] bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-opacity-90">
              <div className="opacity-0 transition-all flex gap-5 duration-300 ease-in-out group-hover:opacity-100">
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaFacebookF />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaTwitter />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f5f9] text-center p-4">
            <h5 className="font-bold mb-0 text-lg text-[#0B2154]">Robert Lewis</h5>
            <small className='text-[#596277]'>Tire Technician</small>
          </div>
        </div>

        {/* Team Member 4 */}
        <div className="team-item" data-aos="fade-up" data-aos-delay="700">
          <div className="relative overflow-hidden group">
            <Image className="w-full h-auto" src="/img/team-4.jpg" alt="Team Member 4" width={400} height={400} />
            <div className="absolute inset-0 bg-[#D81324] bg-opacity-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:bg-opacity-90">
              <div className="opacity-0 transition-all flex gap-5 duration-300 ease-in-out group-hover:opacity-100">
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaFacebookF />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaTwitter />
                </a>
                <a className="text-[#D81324] bg-white hover:bg-[#0B2154] hover:text-white p-2 rounded-sm mx-1 text-2xl" href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f5f9] text-center p-4">
            <h5 className="font-bold mb-0 text-lg text-[#0B2154]">Kevin Brown</h5>
            <small className='text-[#596277]'>Parts Specialist</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniciansTeam;

