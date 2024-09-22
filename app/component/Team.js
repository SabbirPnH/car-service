import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  {
    name: "David Wilson",
    role: "David is the Founder and CEO of Vegan Food.",
    imgSrc: "/img/team (1).jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    }
  },
  {
    name: "Mark Adair",
    role: "Eva is the Head of Vegan Food Supply Chain",
    imgSrc: "/img/team (2).jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    }
  },
  {
    name: "Simon Konecki",
    role: "Joe Smith is our leading Customer Care specialist.",
    imgSrc: "/img/team (3).jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    }
  }
];

export default function Team() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

    const backgroundImage = '/img/bg-image.jpg';

  return (
    <div className="font-[sans-serif] mt-5 sm:mt-16">
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="h-60 w-full "></div>

      <div className="px-4 sm:px-14 -mt-48">
        <h2 className="text-center text-2xl md:text-5xl font-bold text-black mb-7 lg:mb-12">Our Professional Team</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-500"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${index * 200}`}
            >
              <div className="lg:min-h-[250px]">
                <Image
                  onClick={handleScrollToTop}
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-full cursor-pointer rounded-lg inline-block"
                  width={500}
                  height={500}
                />
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-bold cursor-pointer text-[#F5004F]">{member.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>

                <div className="space-x-4 mt-6">
                  {member.socialLinks.facebook && (
                    <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 155.139 155.139">
                          <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" />
                        </svg>
                      </button>
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="#333" viewBox="0 0 512 512">
                          <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                        </svg>
                      </button>
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <button
                        type="button"
                        className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#333" viewBox="0 0 24 24">
                          <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z" />
                        </svg>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
