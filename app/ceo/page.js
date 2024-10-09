// import React from "react";
// import Image from "next/image";
// const EmailTemplate = () => {
//   return (
//     <div className="px-4 sm:px-20">
//         <div className="flex items-center gap-2 sm:gap-4 justify-center py-5 border-b-2 ">
//          <p
//             href={"/"}
//             className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
//           >
//             <Image className="h-12 w-full" src="/img/logo-removebg-preview.png" alt="logo-image" width={400} height={400}/>
            
//           </p>
//           <p className="text-[12px] sm:text-[16px]">Samir Motor Corporation</p>
//          </div>
      
//         <p className="max-w-2xl mx-auto text-justify mt-5">Dear Samir Motors Corporation Community,

// Our teams have been working diligently over the past few days to investigate a cybersecurity incident while simultaneously working to restore our systems, including the website and customer service platforms.

// Samir Motors Corporation is built on trust, transparency, and reliability. As such, I am writing to inform you that our website and systems are back online, and to provide you with an update on the ongoing investigation and the steps we are taking to address the issue.

// Here’s what we know so far:

// While our investigation is ongoing, preliminary evidence indicates that an unauthorized user may have gained access to our systems. As a result, certain personally identifiable information might have been compromised.

// What you can do to protect yourself:

// We have engaged an external forensics team to thoroughly examine the extent of the compromise. As a precaution, we advise our customers and partners to monitor their accounts closely for any suspicious activity. If you use the same password for multiple sites, we recommend that you update those passwords immediately.

// What we’re doing about it:

// Given the evolving nature of cyber threats, we continuously work to improve our security measures. In response to this incident, we are implementing several new safeguards, including:

// Resetting all user passwords as a security precaution on [Insert Date].
// Reassessing our data retention practices to limit the storage of sensitive information, where appropriate.
// Enhancing our overall cyber threat detection and prevention systems.
// Our customers and partners are the foundation of Samir Motors Corporation, and we are fully committed to ensuring the security of your information and providing the transparency you expect from us.

// We deeply regret any inconvenience this incident has caused and appreciate your patience as we worked to restore our services.

// Thank you for your continued trust in Samir Motors Corporation.

// Sincerely,
// [CEO's Name]
// CEO, Samir Motors Corporation

// </p>
//     </div>
//   );
// };

// export default EmailTemplate;



import React from "react";
import Image from "next/image";

const EmailTemplate = () => {
  return (
    <div className="px-4 sm:px-20">
      {/* Header Section */}
      <div className="flex items-center gap-2 sm:gap-4 justify-center py-5 border-b-2">
        <p className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
          <Image
            className="h-12 w-full"
            src="/img/logo-removebg-preview.png"
            alt="logo-image"
            width={400}
            height={400}
          />
        </p>
        <p className="text-[12px] sm:text-[16px] font-bold">Samir Motor Corporation</p>
      </div>

      {/* CEO Message Section */}
      <p className="max-w-2xl mx-auto text-justify mt-5">
        Dear Samir Motors Corporation Community,
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        Our teams have been working diligently over the past few days to
        investigate a cybersecurity incident while simultaneously working to
        restore our systems, including the website and customer service
        platforms.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        Samir Motors Corporation is built on trust, transparency, and
        reliability. As such, I am writing to inform you that our website and
        systems are back online, and to provide you with an update on the
        ongoing investigation and the steps we are taking to address the issue.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        <strong>Here’s what we know so far:</strong> While our investigation is
        ongoing, preliminary evidence indicates that an unauthorized user may
        have gained access to our systems. As a result, certain personally
        identifiable information might have been compromised.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        <strong>What you can do to protect yourself:</strong> We have engaged an
        external forensics team to thoroughly examine the extent of the
        compromise. As a precaution, we advise our customers and partners to
        monitor their accounts closely for any suspicious activity. If you use
        the same password for multiple sites, we recommend that you update those
        passwords immediately.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        <strong>What we’re doing about it:</strong> Given the evolving nature of
        cyber threats, we continuously work to improve our security measures. In
        response to this incident, we are implementing several new safeguards,
        including:
      </p>

      <div className="max-w-2xl mx-auto text-justify mt-3">
        <li>
          Resetting all user passwords as a security precaution on [Insert Date].
        </li>
        <li>
          Reassessing our data retention practices to limit the storage of
          sensitive information, where appropriate.
        </li>
        <li>
          Enhancing our overall cyber threat detection and prevention systems.
        </li>
      </div>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        Our customers and partners are the foundation of Samir Motors
        Corporation, and we are fully committed to ensuring the security of your
        information and providing the transparency you expect from us.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        We deeply regret any inconvenience this incident has caused and
        appreciate your patience as we worked to restore our services.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-3">
        Thank you for your continued trust in Samir Motors Corporation.
      </p>

      <p className="max-w-2xl mx-auto text-justify mt-5">
        Sincerely,<br />
        [CEO's Name]<br />
        CEO, Samir Motors Corporation
      </p>
    </div>
  );
};

export default EmailTemplate;
