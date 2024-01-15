import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  PrimaryHeading,
  PrimaryText,
  SecondaryHeading,
} from "../components/Text";
import Button from "../components/Button";
import { Icons } from "../assets/icons/icons";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    ["HOME", "/"],
    ["ABOUT", "#Know"],
    ["SERVICES", "#Service"],
    ["PORTFOLIO", "#Work"],
    ["TESTIMONIAL", "#Review"],
    ["CONTACT", "#Contact"],
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
      <nav className="fixed lg:sticky top-0 z-[99] w-[100%]  text-center border-b bg-white justify-between px-4 xl:px-[4rem] flex items-center">
        {/* ...existing code... */}
        <div className="w-[50%] lg:w-1/4 pt-4">
         <a href="/"> <PrimaryHeading
            title={"Ahsan Akram"}
            style={"lg:text-[25px] sm:w-[100%]"}
          /></a>
        </div>
        <div class="w-2/3 hidden lg:block mx-auto">
          <div class="navLink">
            {links.map(([title, url]) => (
              <a
                key={title} // Remember to add a unique key when mapping through elements in React
                href={url}
                className="block mt-4 font-semibold lg:inline-block  lg:text-[15px] xl:text-[18px] text-[black] lg:mt-0  mr-4 xl:mr-8"
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
                className="duration-500 ease-in-out hover:-translate-y-1 hover:text-gray-400   p-[8px] text-[20px]"
              >
                <FontAwesomeIcon
                  icon={
                    title === "Twitter"
                      ? faTwitter
                      : title === "Instagram"
                      ? faInstagram
                      : title === "LinkedIn"
                      ? faLinkedin
                      : title === "Facebook"
                      ? faFacebook
                      : null
                  }
                  // size="sm"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="w-1/4 lg:hidden ">
        <Button
          onClick={() => setShowSidebar(!showSidebar)}
          style={"w-[50px]"}
          text={
            showSidebar ? (
              <FontAwesomeIcon icon={Icons.Close} />
            ) : (
              <FontAwesomeIcon icon={Icons.Bars} />
            )
          }
        />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`sm:W-[100%] fixed w-[100%] z-[1] h-[100vh] flex items-center justify-center lg:hidden top-0 right-0 bg-gray-100 p-10 ${
          showSidebar ? "block" : "hidden"
        }`}
      >
        <div id="sidebar" class=" text-center  p-">
          {links.map(([title, url]) => (
            <a
              key={title} // Remember to add a unique key when mapping through elements in React
              href={url}
              className=" block mt-4 font-semibold"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
