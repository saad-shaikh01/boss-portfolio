// import React, { useEffect } from "react";
// import videoSrc from "../assets/videos/Header-video.mp4";
// import profile from "../assets/images/profile2.jpg";
// import Button from "../components/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { PrimaryHeading, SecondaryText } from "../components/Text";
// import { Icons } from "../assets/icons/icons";

// function Hero() {
//   useEffect(() => {
//     const icon = document.getElementById("arrowIcon");
//     icon.classList.add("opacity-100", "animate-bounce");
//   }, []);
//   return (
//     <div className="relative h-[120vh] lg:h-[100vh]">
//       {/* Video */}
//       <div className="absolute inset-0">
//         <video muted autoPlay loop className="h-full w-full object-cover">
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-center bg-dark-primary bg-opacity-90">
//         <div className="text-center">
//           <img
//             src={profile}
//             className="profile-image w-36 h-36 rounded-full border border-4 border-[white] mx-auto"
//           />
//           <PrimaryHeading
//             style={
//               "hero-heading mx-auto pt-4 sm:w-[100%] lg:w-[50%] sm:text-[22px]"
//             }
//             title={
//               "HELLO! I'M CALLUM SMITH - GRAPHIC DESIGNER, ILLUSTRATOR & ART DIRECTOR."
//             }
//           />
//           <SecondaryText
//             style={"secondary-text"}
//             title={"based in Los Angeles, USA."}
//           />
//           <Button style={"button"} text="About Me" />

//           <div
//             id="arrowIcon"
//             className="bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity"
//           >
//             <a href="#Know">
//               {" "}
//               <FontAwesomeIcon
//                 icon={Icons.DownArrow}
//                 className="cursor-pointer text-black text-2xl mt-8"
//               />{" "}
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Content End*/}
//     </div>
//   );
// }

// export default Hero;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryHeading, SecondaryText } from "../components/Text";
import { Icons } from "../assets/icons/icons";
import videoSrc from "../assets/videos/Header-video.mp4";
import profile from "../assets/images/profile2.jpg";
import Button from "../components/Button";

function Hero() {
  const imageRef = useRef(null);
  const primaryHeadingRef = useRef(null);

  useEffect(() => {
    const icon = document.getElementById("arrowIcon");
        icon.classList.add("opacity-100", "animate-bounce");

    const tl = gsap.timeline();

    // Initialize elements with initial properties
    gsap.set(imageRef.current, { opacity: 0, y: -70 });
    gsap.set(primaryHeadingRef.current, { opacity: 0, x: 50 });
    // gsap.set("#arrowIcon", { opacity: 0, y: 20 });

    // Animation for the profile image
    tl.to(imageRef.current, { opacity: 1, y: 0, duration: 2 });

    // Animation for the heading
    tl.to(primaryHeadingRef.current, { opacity: 1, x: 0, duration: 1 }, "-=0.5");

    // Animation for the arrow icon
    // tl.to("#arrowIcon", { opacity: 1, y: 0, duration: 0.5 }, "-=0.5");

    // Add more animations as needed

  }, []);

  return (
    <div className="relative h-[120vh] lg:h-[100vh]">
      {/* Video */}
      <div className="absolute inset-0">
        <video muted autoPlay loop className="h-full w-full object-cover">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center bg-dark-primary bg-opacity-90">
        <div className="text-center">
          <img
            ref={imageRef}
            src={profile}
            className="profile-image w-36 h-36 rounded-full border border-4 border-[white] mx-auto"
          />
          <PrimaryHeading
            ref={primaryHeadingRef}
            style={
              "hero-heading mx-auto pt-4 sm:w-[100%] lg:w-[50%] sm:text-[22px]"
            }
            title={
              "HELLO! I'M CALLUM SMITH - GRAPHIC DESIGNER, ILLUSTRATOR & ART DIRECTOR."
            }
          />
          <SecondaryText
            style={"secondary-text"}
            title={"based in Los Angeles, USA."}
          />
          <Button style={"button"} text="About Me" />

          <div
            id="arrowIcon"
            className="bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity"
          >
            <a href="#Know">
              {" "}
              <FontAwesomeIcon
                icon={Icons.DownArrow}
                className="cursor-pointer text-black text-2xl mt-8"
              />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Content End*/}
    </div>
  );
}

export default Hero;




// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { PrimaryHeading, SecondaryText } from "../components/Text";
// import { Icons } from "../assets/icons/icons";
// import videoSrc from "../assets/videos/Header-video.mp4";
// import profile from "../assets/images/profile2.jpg";
// import Button from "../components/Button";

// function Hero() {
//   const imageRef = useRef(null);
//   const headingRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline();

//     // Animation for the profile image
//     tl.from(imageRef.current, { opacity: 0, y: -50, duration: 1 });

//     // Animation for the heading
//     tl.from(headingRef.current, { opacity: 0, x: 50, duration: 1 }, "-=0.5");

//     // Animation for the arrow icon
//     tl.from("#arrowIcon", { opacity: 0, y: 20, duration: 0.5 }, "-=0.5");

//     // Add more animations as needed

//   }, []);

//   return (
//     <div className="relative h-[120vh] lg:h-[100vh]">
//       {/* Video */}
//       <div className="absolute inset-0">
//         <video muted autoPlay loop className="h-full w-full object-cover">
//           <source src={videoSrc} type="video/mp4" />
//         </video>
//       </div>

//       {/* Content */}
//       <div className="absolute inset-0 flex items-center justify-center bg-dark-primary bg-opacity-90">
//         <div className="text-center">
//           <img
//             ref={imageRef}
//             src={profile}
//             className="profile-image w-36 h-36 rounded-full border border-4 border-[white] mx-auto"
//           />
//           <PrimaryHeading
//             ref={headingRef}
//             style={
//               "hero-heading mx-auto pt-4 sm:w-[100%] lg:w-[50%] sm:text-[22px]"
//             }
//             title={
//               "HELLO! I'M CALLUM SMITH - GRAPHIC DESIGNER, ILLUSTRATOR & ART DIRECTOR."
//             }
//           />
//           <SecondaryText
//             style={"secondary-text"}
//             title={"based in Los Angeles, USA."}
//           />
//           <Button style={"button"} text="About Me" />

//           <div
//             id="arrowIcon"
//             className="bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity"
//           >
//             <a href="#Know">
//               {" "}
//               <FontAwesomeIcon
//                 icon={Icons.DownArrow}
//                 className="cursor-pointer text-black text-2xl mt-8"
//               />{" "}
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Content End*/}
//     </div>
//   );
// }

// export default Hero;
