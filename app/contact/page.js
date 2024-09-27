import { MdEmail } from 'react-icons/md';
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
const ContactPage=()=>{
    return(
<div>
<div className="w-full bg-cover bg-center mb-5" style={{backgroundImage: 'url("/img/carousel-bg-2.jpg")'}}>
  <div className="bg-black/70  py-10 sm:py-20">
    <div className="container mx-auto text-center">
      {/* Heading */}
      <h1 className=" text-4xl sm:text-6xl font-semibold text-white mb-3 animate-slide-in-down">
       Contact
      </h1>
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb">
        <ol className="flex justify-center items-center space-x-3 text-sm uppercase text-white pt-2">
          <li>
            <Link href={"/"} className="text-[#D81324] text-lg">Home </Link>
          </li>
          <li><FaChevronRight /></li>
          <li className="text-white text-lg"> Contact</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
<div className="px-4 sm:px-20 py-10">
  <div className="text-center">
    <h6 className="text-[#D81324] font-bold uppercase"> Contact Us </h6>
    <h1 className="mb-5 text-2xl sm:text-4xl font-semibold pt-2 text-center text-[#0B2154]">Contact For Any Query</h1>
  </div>
  <div className="space-y-4 lg:flex lg:justify-between">
      <div className="bg-gray-100 flex flex-col justify-center p-6 ">
        <h5 className="text-xl font-semibold text-[#0B2154]"> Booking </h5>
        <p className="text-gray-700 mt-2">
          <MdEmail className="text-[#D81324] inline-block mr-2" /><span className='text-[#596277]'>book@example.com</span>
        </p>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center p-6 ">
        <h5 className="text-xl font-semibold text-[#0B2154]"> General </h5>
        <p className="text-gray-700 mt-2">
        <MdEmail className="text-[#D81324] inline-block mr-2" /><span className='text-[#596277]'>info@example.com</span>
        </p>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center p-6 ">
        <h5 className="text-xl font-semibold text-[#0B2154]"> Technical </h5>
        <p className="text-gray-700 mt-2">
        <MdEmail className="text-[#D81324] inline-block mr-2" /><span className='text-[#596277]'>tech@example.com</span>
        </p>
      </div>
    </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
    {/* Contact Info Boxes */}
    

    {/* Google Map */}
    <div>
      <iframe
        className="rounded-lg w-full h-[350px]"
        src="https://www.google.com/maps/place/%E0%A6%A2%E0%A6%BE%E0%A6%95%E0%A6%BE/@23.7810672,90.2548725,11z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu&g_ep=EgoyMDI0MDkyMy4wIKXMDSoASAFQAw%3D%3D"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
    <div className="mt-8 lg:mt-0">
    <p className="mb-4 text-gray-600 text-center lg:text-left">
      The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
      <a href="https://htmlcodex.com/contact-form" className="text-[#D81324]">Download Now</a>.
    </p>
    <form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Fields */}
        <div className="form-floating">
          <input
            type="text"
            className="w-full border-2 p-4 border-gray-300 text-[#596277]  placeholder:text-[#596277] outline-none "
            id="name"
            placeholder="Your Name"
          />
         
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="w-full border-2 p-4 border-gray-300 text-[#596277]  placeholder:text-[#596277] outline-none "
            id="email"
            placeholder="Your Email"
          />
       
        </div>
      </div>

      {/* Subject Field */}
      <div className="form-floating mt-4">
        <input
          type="text"
          className="w-full p-4 border-2 border-gray-300 text-[#596277]  placeholder:text-[#596277] outline-none "
          id="subject"
          placeholder="Subject"
        />
    
      </div>

      {/* Message Field */}
      <div className="form-floating mt-4">
        <textarea
          className="w-full p-4  border-2 border-gray-300 text-[#596277]  placeholder:text-[#596277] outline-none "
          id="message"
          placeholder=" Message "
          style={{ height: '100px' }}
        />
       
      </div>

      {/* Submit Button */}
      <button className="w-full uppercase mt-6 bg-[#D81324] text-white py-3 px-5  hover:bg-red-600 transition-colors duration-300">
        Send Message
      </button>
    </form>
  </div>
  </div>

 
</div>
</div>


    )
}
export default ContactPage;