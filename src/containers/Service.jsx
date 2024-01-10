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


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const servicesData = [
  {
    icon: faPaintBrush,
    title: 'UI/UX Design',
    description:
      'Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.',
  },
  {
    icon: faLaptopCode,
    title: 'Web Development',
    description:
      'We specialize in building robust and scalable web applications using cutting-edge technologies.',
  },
  {
    icon: faMobileAlt,
    title: 'App Development',
    description:
      'Build feature-rich mobile applications that cater to the unique needs of your business and users.',
  },
  {
    icon: faPaintBrush,
    title: 'UI/UX Design',
    description:
      'Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.',
  },
  {
    icon: faLaptopCode,
    title: 'Web Development',
    description:
      'We specialize in building robust and scalable web applications using cutting-edge technologies.',
  },
  {
    icon: faMobileAlt,
    title: 'App Development',
    description:
      'Build feature-rich mobile applications that cater to the unique needs of your business and users.',
  },
  // Add more service objects as needed
];

const Service = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-wrap -mx-4">
        {servicesData.map((service, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mt-2rem lg:mt-[4rem]">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className=" text-4xl mb-4 text-center">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
