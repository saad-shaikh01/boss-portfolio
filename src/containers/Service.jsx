// import React from 'react';

// const Service = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//       <div className="flex flex-wrap -mx-4">
//         {/* Service 1: UI/UX Design */}
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="text-4xl mb-4 text-center">
//               <i className="fas fa-paint-brush"></i>
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-center">UI/UX Design</h3>
//             <p className="text-gray-600 text-center">
//               Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.
//             </p>
//           </div>
//         </div>

//         {/* Service 2: Web Development */}
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="text-4xl mb-4 text-center">
//               <i className="fas fa-laptop-code"></i>
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-center">Web Development</h3>
//             <p className="text-gray-600 text-center">
//               We specialize in building robust and scalable web applications using cutting-edge technologies.
//             </p>
//           </div>
//         </div>

//         {/* Service 3: App Development */}
//         <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="text-4xl mb-4 text-center">
//               <i className="fas fa-mobile-alt"></i>
//             </div>
//             <h3 className="text-xl font-bold mb-2 text-center">App Development</h3>
//             <p className="text-gray-600 text-center">
//               Build feature-rich mobile applications that cater to the unique needs of your business and users.
//             </p>
//           </div>
//         </div>

//         {/* Add more services following the same pattern */}
//       </div>
//     </div>
//   );
// };

// export default Service;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryHeading, PrimaryText, SubHeading } from "../components/Text";
import { Icons } from "../assets/icons/icons";
const servicesData = [
  {
    icon: Icons.uiUxDesign,
    title: "UI/UX Design",
    description:
      "Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Web Development",
    description:
      "We specialize in building robust and scalable web applications using cutting-edge technologies.",
  },
  {
    icon: Icons.mobileApp,
    title: "App Development",
    description:
      "Build feature-rich mobile applications that cater to the unique needs of your business and users.",
  },
  {
    icon: Icons.uiUxDesign,
    title: "UI/UX Design",
    description:
      "Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Web Development",
    description:
      "We specialize in building robust and scalable web applications using cutting-edge technologies.",
  },
  {
    icon: Icons.mobileApp,
    title: "App Development",
    description:
      "Build feature-rich mobile applications that cater to the unique needs of your business and users.",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-100 py-10 md:py-20"> 
    <div className="container mx-auto py-8">
      <PrimaryHeading
        title={"How I can help your next project"}
        style={"w-full sm:w-[100%] text-center mx-auto mb-8 lg:mt-8"}
      />

<div className="flex flex-wrap -mx-4" style={{ display: 'flex', alignItems: 'stretch' }}>
  {servicesData.map((service, index) => (
    <div
      key={index}
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-2rem lg:mt-[4rem]"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className="mb-4 bg-white p-6 text-center rounded-lg shadow-md flex-grow">
        <div className="text-5xl mb-4 text-center text-dark-primary">
          <FontAwesomeIcon icon={service.icon} />
        </div>
        <SubHeading title={service.title} />
        <PrimaryText title={service.description} />
      </div>
    </div>
  ))}
</div>

    </div>
    </div>
  );
};

export default Service;
