// // import React, { useEffect, useRef } from "react";
// // import {
// //   PrimaryHeading,
// //   SecondaryText,
// //   PrimaryText,
// //   SecondaryHeading,
// // } from "../components/Text";
// // import Sechead from "../components/Sechead";

// // function About() {
// //   return (
// //     <div className="container mx-auto my-12 md:my-20" id="Know">
// //       <div>
// //         <Sechead text="About Me" style={""} />
// //         <PrimaryHeading
// //           style={"mx-auto sm:w-[100%] text-start lg:text-center w-[100%]"}
// //           title={"Know Me More"}
// //         />

// //         <div className="About-content flex-wrap lg:flex-nowrap gap-10 flex pt-10 justify-around items-center">
// //           <div className="w-[100%] lg:w-[70%]">
// //             <h1 className="text-2xl sm:text-4xl pb-2">
// //               Hi, I'm{" "}
// //               <span className="font-bold border-b border-b-4  border-dark-primary">
// //                 Callum Smith
// //               </span>
// //             </h1>
// //             <SecondaryText
// //               style={"mx-auto w-[100%]"}
// //               title={
// //                 "I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
// //               }
// //             />
// //           </div>

// //           <div className="w-[100%] lg:w-[40%] text-center">
// //             <div className="bg-dark-primary flex items-center justify-center w-28 h-28 rounded-full mx-auto">
// //               <p className="w-[150px] text-[120px] font-bold experience-number opacity-0">
// //                 22
// //               </p>
// //             </div>
// //             <h1 className="text-4xl pb-2">
// //               Years Of <span className="font-bold"> Experience</span>
// //             </h1>
// //           </div>
// //         </div>

// //         <div className="About-content2 pt-20 flex gap-4 flex-wrap justify-between">
// //           <div>
// //             <PrimaryText style={"font-semibold"} title={"Name:"} />
// //             <SecondaryHeading
// //               style={"text-xl font-extrabold sm:text-gray-900"}
// //               title={"Callum Smith"}
// //             />
// //           </div>
// //           <div>
// //             <PrimaryText style={"font-semibold"} title={"Email:"} />
// //             <SecondaryHeading
// //               style={"text-xl font-extrabold sm:text-gray-900"}
// //               title={"chat@callum.com"}
// //             />
// //           </div>
// //           <div>
// //             <PrimaryText style={"font-semibold"} title={"Date Of Birth"} />
// //             <SecondaryHeading
// //               style={"text-xl font-extrabold sm:text-gray-900"}
// //               title={"11, November 1987"}
// //             />
// //           </div>
// //           <div>
// //             <PrimaryText style={"font-semibold"} title={"From:"} />
// //             <SecondaryHeading
// //               style={"text-xl font-extrabold sm:text-gray-900"}
// //               title={"Los Angeles, USA."}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default About;




// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import {
//   PrimaryHeading,
//   SecondaryText,
//   PrimaryText,
//   SecondaryHeading,
// } from "../components/Text";

// function About() {
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     const primaryHeading = containerRef.current.querySelector(".PrimaryHeading");
//     const aboutContent = containerRef.current.querySelector(".About-content");
//     const aboutContent2 = containerRef.current.querySelector(".About-content2");

//     gsap.from(primaryHeading, {
//       y: 50,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.3,
//       ease: "power3.out",
//     });

//     gsap.from(aboutContent, {
//       opacity: 0,
//       x: -50,
//       duration: 1,
//       delay: 0.5,
//       ease: "power3.out",
//     });

//     gsap.from(aboutContent2.children, {
//       opacity: 0,
//       y: 30,
//       duration: 1,
//       stagger: 0.2,
//       ease: "power3.out",
//     });
//   });

//   return (
//     <div className="container mx-auto my-12 md:my-20" id="Know" ref={containerRef}>
//       <div>
//         <PrimaryHeading
//           style={"mx-auto sm:w-[100%] text-start lg:text-center w-[100%]"}
//           title={"Know Me More"}
//         />

//         <div className="About-content flex-wrap lg:flex-nowrap gap-10 flex pt-10 justify-around items-center">
//           <div className="w-[100%] lg:w-[70%]">
//             <h1 className="text-2xl sm:text-4xl pb-2">
//               Hi, I'm{" "}
//               <span className="font-bold border-b border-b-4  border-dark-primary">
//                 Callum Smith
//               </span>
//             </h1>
//             <SecondaryText
//               style={"mx-auto w-[100%]"}
//               title={
//                 "I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
//               }
//             />
//           </div>

//           <div className="w-[100%] lg:w-[40%] text-center">
//             <div className="bg-dark-primary flex items-center justify-center w-28 h-28 rounded-full mx-auto">
//               <p className=" w-[150px] text-[120px] font-bold">22</p>
//             </div>
//             <h1 className="text-4xl pb-2">
//               Years Of <span className="font-bold"> Experience</span>
//             </h1>
//           </div>
//         </div>

//         <div className="About-content2 pt-20 flex gap-4 flex-wrap justify-between">
//           <div>
//             <PrimaryText style={"font-semibold"} title={"Name:"} />
//             <SecondaryHeading
//               style={"text-xl font-extrabold sm:text-gray-900"}
//               title={"Callum Smith"}
//             />
//           </div>
//           <div>
//             <PrimaryText style={"font-semibold"} title={"Email:"} />
//             <SecondaryHeading
//               style={"text-xl font-extrabold sm:text-gray-900"}
//               title={"chat@callum.com"}
//             />
//           </div>
//           <div>
//             <PrimaryText style={"font-semibold"} title={"Date Of Birth"} />
//             <SecondaryHeading
//               style={"text-xl font-extrabold sm:text-gray-900"}
//               title={"11, November 1987"}
//             />
//           </div>
//           <div>
//             <PrimaryText style={"font-semibold"} title={"From:"} />
//             <SecondaryHeading
//               style={"text-xl font-extrabold sm:text-gray-900"}
//               title={"Los Angeles, USA."}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;




import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  PrimaryHeading,
  SecondaryText,
  PrimaryText,
  SecondaryHeading,
} from "../components/Text";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const primaryHeading = containerRef.current.querySelector(".PrimaryHeading");
    const aboutContent = containerRef.current.querySelector(".About-content");
    const aboutContent2 = containerRef.current.querySelector(".About-content2");
    const experienceNumber = containerRef.current.querySelector(".experience-number");

    gsap.from(primaryHeading, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%",
        end: "bottom 96%",
        scrub: 6,
      },
      ease: "power3.out",
    });

    gsap.from(aboutContent, {
      opacity: 0,
      x: -50,
      duration: 2,
      delay: 2.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: 6, // Smoothly updates the animation as you scroll
      },
      ease: "power3.out",
    });

    gsap.from(aboutContent2.children, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: 1, // Smoothly updates the animation as you scroll
      },
      stagger: 0.2,
      ease: "power3.out",
    });

    // Animate the "22" with a delay after other animations
    // gsap.to(experienceNumber, {
    //   opacity: 1,
    //   y: 0,
    //   duration: 1,
    //   delay: 2, // Adjust the delay as needed
    //   ease: "power3.out",
    // });

    // Scroll-triggered animation for the "22" element
    gsap.to(experienceNumber, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: 1, // Smoothly updates the animation as you scroll
      },
      ease: "power3.out",
    });
  });

  return (
    <div className="container mx-auto my-12 md:my-20" id="Know" ref={containerRef}>
      <div>
        <PrimaryHeading
          style={"mx-auto sm:w-[100%] text-start lg:text-center w-[100%]"}
          title={"Know Me More"}
        />

        <div className="About-content flex-wrap lg:flex-nowrap gap-10 flex pt-10 justify-around items-center">
          <div className="w-[100%] lg:w-[70%]">
            <h1 className="text-2xl sm:text-4xl pb-2">
              Hi, I'm{" "}
              <span className="font-bold border-b border-b-4  border-dark-primary">
                Muhammad Ahsan Akram
              </span>
            </h1>
            <SecondaryText
              style={"mx-auto w-[100%]"}
              title={
                "I'm a Tech Entrepreneur, Software Engineer, and Engineering Executive. With a passion for innovation and a deep understanding of technology, I have successfully led numerous Innovation Tech companies and startups to success. As a digital visionary, I constantly stay ahead of the curve, identifying emerging trends and leveraging cutting-edge technologies to drive business growth. With a relentless drive for excellence, I foster a culture of innovation and collaboration within my teams, empowering them to push boundaries and deliver exceptional results. If you're looking for a forward-thinking leader with a strong entrepreneurial spirit and a deep understanding of the digital landscape, I'm here to help you navigate the ever-evolving world of technology and drive your business to new heights."
              }
            />
          </div>

          <div className="w-[100%] lg:w-[40%] text-center">
            <div className="bg-dark-primary flex items-center justify-center w-28 h-28 rounded-full mx-auto">
              <p className="w-[150px] text-[120px] font-bold experience-number opacity-0">
                09
              </p>
            </div>
            <h1 className="text-4xl pb-2">
              Years Of <span className="font-bold"> Experience</span>
            </h1>
          </div>
        </div>

        <div className="About-content2 pt-20 flex gap-4 flex-wrap justify-between">
          <div>
            <PrimaryText style={"font-semibold"} title={"Name:"} />
            <SecondaryHeading
              style={"text-xl font-extrabold sm:text-gray-900"}
              title={"Muhammad Ahsan Akram"}
            />
          </div>
          <div>
            <PrimaryText style={"font-semibold"} title={"Email:"} />
            <SecondaryHeading
              style={"text-xl font-extrabold sm:text-gray-900"}
              title={"Ahsanakram0611@gmail.com"}
            />
          </div>
          <div>
            <PrimaryText style={"font-semibold"} title={"Date Of Birth"} />
            <SecondaryHeading
              style={"text-xl font-extrabold sm:text-gray-900"}
              title={"11, November 1987"}
            />
          </div>
          <div>
            <PrimaryText style={"font-semibold"} title={"From:"} />
            <SecondaryHeading
              style={"text-xl font-extrabold sm:text-gray-900"}
              title={"Karachi, Pakistan."}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
