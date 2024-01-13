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


import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitText from "split-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryHeading, SecondaryText } from "../components/Text";
import { Icons } from "../assets/icons/icons";
import videoSrc from "../assets/videos/Header-video.mp4";
import profile from "../assets/images/profile2.jpg";
import Button from "../components/Button";

function Hero() {


  useEffect(() => {
    // Animation for the primary heading
    // gsap.from(".hero-heading", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   delay: 0.5,
    // });

    // // Animation for the secondary heading
    // gsap.from(".secondary-text", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   delay: 1,
    // });

    // // Animation for the button
    // gsap.from(".button", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   delay: 1.5,
    // });


    // gsap.to(".hero-heading", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   delay: 0.5,
    // });

    // // Animation for the secondary heading
    // gsap.to(".secondary-text", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   delay: 1,
    // });

    // // Animation for the button
    // gsap.to(".button", {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   delay: 1.5,
    // });


// Animation for the hero heading
gsap.from(".hero-heading", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});

// Animation for the secondary heading
gsap.from(".secondary-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
  ease: "power3.out",
  stagger: 0.2, // Staggered animation for a dynamic effect
});

// Animation for the button
gsap.from(".button", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1.5,
  ease: "power3.out",
  rotation: 360,
  backgroundColor: "white", // Change background color for a modern touch
});

// Animation for the hero heading
gsap.to(".hero-heading", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5,
  ease: "power3.out",
});

// Animation for the secondary heading
gsap.to(".secondary-text", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1,
  ease: "power3.out",
});

// Animation for the button
gsap.to(".button", {
  opacity: 1,
  scale: 1,
  duration: 1,
  delay: 1.5,
  ease: "power3.out",
  rotation: 0,
  backgroundColor: "blue", // Change background color back to original
});




    

    // const tl = gsap.timeline();

    // // Animation for the primary heading
    // tl.from(".hero-heading", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   delay: 0.5,
    // });

    // // Animation for the secondary heading
    // tl.from(".secondary-text", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    //   stagger: 0.2, // Stagger for a more dynamic effect
    // });

    // // Animation for the button
    // tl.from(".button", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1,
    // });



    // // Bounce animation for the arrow icon
    // const icon = document.getElementById("arrowIcon");
    // gsap.from(icon, {
    //   opacity: 0,
    //   y: 20,
    //   duration: 1,
    //   delay: 2,
    //   onComplete: () => {
    //     icon.classList.add("animate-bounce");
    //   },
    // });
  }, []);

  // useEffect(() => {
  //   const icon = document.getElementById("arrowIcon");
  //       icon.classList.add("opacity-100", "animate-bounce");

  // }, []);

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
            src={profile}
            className="profile-image w-36 h-36 rounded-full border border-4 border-[white] mx-auto"
          />
          <PrimaryHeading
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
