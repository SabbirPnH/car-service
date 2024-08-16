// import Image from 'next/image';
// import React from 'react';
// import Marquee from 'react-fast-marquee';

// // List of brand images
// const brand = [
//     { id: 1, image: "/img/veganbrabd (1).png" },
//     { id: 2, image: "/img/veganbrabd (2).png" },
//     { id: 3, image: "/img/veganbrabd (3).png" },
//     { id: 4, image: "/img/veganbrabd (4).png" },
//     { id: 5, image: "/img/veganbrabd (5).png" },
//     { id: 6, image: "/img/veganbrabd (6).png" },
//     { id: 7, image: "/img/veganbrabd (7).png" },
//     { id: 8, image: "/img/veganbrabd (8).png" },
//     { id: 9, image: "/img/veganbrabd (9).png" },
// ];

// export default function Barnd() {
//     return (
//         <div>
//             <Marquee>
//                 {brand.map((item) => (
//                     <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]' key={item.id} style={{ margin: '0 10px' }}>
//                         <Image
//                             src={item.image}
//                             width={400}
//                             height={400}
//                             alt={`brand-${item.id}`}
//                             layout="intrinsic"
//                         />
//                     </div>
//                 ))}
//             </Marquee>
//         </div>
//     );
// }


import Image from 'next/image';
import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import '../../public/css/brand.css'; // Make sure this path is correct for your project

const brand = [
    { id: 1, image: "/img/veganbrabd (1).png" },
    { id: 2, image: "/img/veganbrabd (2).png" },
    { id: 3, image: "/img/veganbrabd (3).png" },
    { id: 4, image: "/img/veganbrabd (4).png" },
    { id: 5, image: "/img/veganbrabd (5).png" },
    { id: 6, image: "/img/veganbrabd (6).png" },
    { id: 7, image: "/img/veganbrabd (7).png" },
    { id: 8, image: "/img/veganbrabd (8).png" },
    { id: 9, image: "/img/veganbrabd (9).png" },
];

export default function Barnd() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ overflow: 'hidden' }}
        >
            <Marquee
                speed={50}
                pauseOnHover={isHovered}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {brand.map((item) => (
                    <div className='h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] cursor-pointer' key={item.id} style={{ margin: '0 10px' }}>
                        <Image
                            src={item.image}
                            width={500}
                            height={500}
                            alt={`brand-${item.id}`}
                            layout="intrinsic"
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
