import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import CustomButton  from "../components/Button";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { PrimaryHeading, PrimaryText, SecondaryHeading } from "../components/Text";
import Button from "../components/Button";
import { Icons } from "../assets/icons/icons";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    ["Home", "/aa"],
    ["About", "/aa"],
    ["Services", "/aa"],
    ["Portfolio", "/aa"],
    ["Testimonial", "/aa"],
    ["Blog", "/aa"],
  ];

  const socialLinks = [
    ["Twitter", "https://twitter.com/example"],
    ["Facebook", "https://github.com/example"],
    ["LinkedIn", "https://www.linkedin.com/in/example"],
    ["Instagram", "https://github.com/example"],
    ["GitHub", "https://github.com/example"],
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 text-center bg-gray-200 justify-between py-2 px-[4rem] flex items-center">
        {/* ...existing code... */}
         <div className=" w-1/4" >
          <PrimaryHeading title={"Ahsan Akram"} style={" w-full  mb-0 "} />
          </div>
        <div class="w-2/3 hidden lg:block mx-auto">
          <div class="navLink">
            {links.map(([title, url]) => (
              <a
                key={title} // Remember to add a unique key when mapping through elements in React
                href={url}
                className="block mt-4 lg:inline-block  text-[18px]  lg:mt-0  hover:text-blue-400 mr-8"
              >
                {title}
              </a>
            ))}
            {/* <CustomButton
              onClick={() => setShowSidebar(!showSidebar)}
              className=""
              title={"Contact us"}
            ></CustomButton> */}
          </div>
        </div>

        {/* Burger Icon */}
        <div className="w-1/4 hidden lg:block ">
        <div className="flex justify-center ">
            {socialLinks.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="mr- hover:text-gray-400   p-[8px] text-[20px]"
              >
                <FontAwesomeIcon
                  icon={
                    title === "Twitter"
                      ? faTwitter
                      : title === "Facebook"
                      ? faFacebook
                      : title === "Instagram"
                      ? faInstagram
                      : title === "LinkedIn"
                      ? faLinkedin
                      : title === "GitHub"
                      ? faGithub
                      : null
                  }
                  // size="sm"
                />
              </a>
            ))}
          </div>

          {/* <CustomButton title="title" /> */}
          {/* <CustomButton
            onClick={() => setShowSidebar(!showSidebar)}
            className="z-[] cursor-pointer flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            title={<FontAwesomeIcon icon={faBars} />}
          ></CustomButton> */}
        </div>
        <div className="w-1/4 bg-red-900 lg:hidden ">
          <Button onClick={() => setShowSidebar(!showSidebar)} style={'w-[50px]'} text={<FontAwesomeIcon icon={Icons.DownArrow} />} />
          {/* <Button onClick={() => console.log('console soncols sadfasdf')} style={'w-[50px]'} text={<FontAwesomeIcon icon={Icons.DownArrow} />} /> */}
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`h-screen sm:W-[100%]  w-[100%] z-[1] lg:hidden top-0 right-0 bg-gray-800 p-10 ${
          showSidebar ? "block" : "hidden"
        }`}
      >
        <div className="absolute top-4 right-10">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="z-[] flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <div id="sidebar" class=" text-center lg: bg-gray-800 p-">
          {links.map(([title, url]) => (
            <a
              key={title} // Remember to add a unique key when mapping through elements in React
              href={url}
              className=" block mt-4 text-white hover:text-gray-400"
            >
              {title}
            </a>
          ))}
        </div>

        {/* <div className="mt-8 text-white">
          <SecondaryHeading title={"About Me"} />
          <PrimaryText
            title={
              "I am passionate about ReactJS and Tailwind CSS and love building projects with them! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis sequi dolorum blanditiis modi quasi non optio aperiam in? Eligendi omnis magni, modi libero, ducimus sequi deserunt ab necessitatibus placeat architecto quos praesentium."
            }
          />

          <SecondaryHeading title={"Get In Touch"} />
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 border-e pe-2 "
              />
              75 Arlington St. Suite 500 Boston, MA 02116, USA
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 border-e pe-2" />
              +8898 6777 8796
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 border-e pe-2"
              />
              example@gmail.com
            </li>
          </ul>
          <div className="flex">
            {socialLinks.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="mr- text-white hover:text-gray-400   p-[8px] text-[20px]"
              >
                <FontAwesomeIcon
                  icon={
                    title === "Twitter"
                      ? faTwitter
                      : title === "Facebook"
                      ? faFacebook
                      : title === "Instagram"
                      ? faInstagram
                      : title === "LinkedIn"
                      ? faLinkedin
                      : title === "GitHub"
                      ? faGithub
                      : null
                  }
                  // size="sm"
                />
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;



// import React, {useState} from "react";

// export default function Navbar() {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav class="bg-white border-gray-200 dark:bg-gray-900">
//       <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a
//           href="https://flowbite.com/"
//           class="flex items-center space-x-3 rtl:space-x-reverse"
//         >
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             class="h-8"
//             alt="Flowbite Logo"
//           />
//           <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Flowbite
//           </span>
//         </a>
//         <button
//           onClick={toggleMenu}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span class="sr-only">Open main menu</span>
//           <svg
//             class="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
//           <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
