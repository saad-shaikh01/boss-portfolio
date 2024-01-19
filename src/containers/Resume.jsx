// import React, { useEffect } from "react";
// import gsap from "gsap";
// import Sechead from "../components/Sechead";
// import {
//   PrimaryHeading,
//   PrimaryText,
//   SecondaryText,
//   SubHeading,
// } from "../components/Text";
// import Button from "../components/Button";

// const animateEntry = (entry) => {
//   gsap.from(entry, {
//     opacity: 0,
//     y: 20,
//     duration: 0.6,
//     scrollTrigger: {
//       trigger: ".resumeContainer" ,
//       start: "top center", // Adjust as needed
//       end: "bottom center", // Adjust as needed
//       scrub: 1, // Smoothly updates the animation as you scroll
//     },
//     ease: "power3.out",
//     stagger: 0.2,
//   });

//   gsap.to(entry, {
//     opacity: 1,
//     y: 0,
//     duration: 0.6,
//     scrollTrigger: {
//       trigger: ".resumeContainer" ,
//       start: "top center", // Adjust as needed
//       end: "bottom center", // Adjust as needed
//       scrub: 1, // Smoothly updates the animation as you scroll
//     },
//     ease: "power3.out",
//     stagger: 0.2,
//   });
// };
// const educationData = [
//   {
//     title: "Master of Science - MS, Computer Science ",
//     institution: "Mohammad Ali Jinnah University (MAJU)",
//     duration: "2020 - 2022",
//   },
//   {
//     title: "Bachelor of Science - BS, Computer Science",
//     institution: "Preston University",
//     duration: "2015 - 2019",
//   },
//   {
//     title: "HSC, Pre-Engineering",
//     institution: "Govt Islamia Science College Karachi",
//     duration: "2010 – 2013",
//   },
// {
//   title: " SSC, Computer Studies",
//   institution: "Brilliant Career Secondary School",
//   duration: "2008 – 2010",
// },
//   // Add more education entries as needed
// ];

// const experienceData = [
//   {
//     title: "Founder & CEO",
//     company: "Asmatech Global",
//     duration: "Full-time Jun 2023 - Present · Karāchi, Sindh, Pakistan ·",
//   },
//   {
//     title: "Head of Engineering ",
//     company: "Drive Technologies",
//     duration: "Full-time Mar 2023 - Present · 11 Dubai, United Arab Emirates · Hybrid",
//   },
//   {
//     title: "Head of Quality Assurance",
//     company: "ConvrtX",
//     duration: "Full-time  Nov 2022 - Aug 2023 · Toronto, Ontario, Canada · Remote",
//   },

//   {
//     title: "Senior Quality Assurance Consultant",
//     company: "Systems Limited",
//     duration: "Full-time Jan 2022 - Nov 2022 Karāchi, Sindh, Pakistan",
//   },
//   {
//     title: "QA Consultant",
//     company: "Systems Limited",
//     duration: "Jul 2021 - Jan 2022 Karāchi, Sindh, Pakistan",
//   },
//   {
//     title: "Senior Software Quality Assurance Engineer",
//     company: "Arpatech (Pvt) Ltd (Pakistan Official)",
//     duration: "Mar 2019 - Jun 2021 Karachi, PakistanKarachi, Pakistan",
//   },
//   {
//     title: "Technical Executive - SQA & Application Support",
//     company: "(APAG) Agro Processor Atmospheric Gasses Pvt (Ltd)",
//     duration: "Jun 2017 - Mar 2019 karachi, Pakistan",
//   },
//   {
//     title: "Software Quality Assurance Engineer",
//     company: "EfroTech - Intelligent|Business|PEOPLE ",
//     duration: "June 2015 - Jun 2017 · Shahrah-e-Faisal Karachi, Pakistan.",
//   },
//   {
//     title: "Software Quality Assurance Intern Intelligenes ",
//     company: "Oct 2014 - Dec 2014 · Tariq Road, Dilkusha Forum Karachi, Pakistan",
//     duration: "",
//   },

//   // Add more experience entries as needed
// ];

// const Resume = () => {

//   useEffect(() => {
//     // Animation for education entries
//     const educationEntries = document.querySelectorAll(".education-entry");
//     animateEntry(educationEntries);

//     // Animation for experience entries
//     const experienceEntries = document.querySelectorAll(".experience-entry");
//     animateEntry(experienceEntries);
//   }, []);
//   return (
//     <div className="container resumeContainer mx-auto py-8 md:py-20">
//       <Sechead text="Resume" style={"mx-auto"} />
//       <PrimaryHeading
//         title={"A Summary of My Resume"}
//         style={"w-full sm:w-[100%] text-center mb-8 mt-2"}
//       />
//       <div className="flex flex-col md:flex-row mt-2rem lg:mt-[4rem]">
//         <div className="md:w-1/2 lg:pr-8">
//           <div>
//             <div className="mb-8 ">
//               <SubHeading style={"lg:text-[28px]"} title={"My Education"} />
//               <div className="border-s-2 border-s-dark-primary ps-4 mt-8 border-dark-primary">
//                 {educationData.map((education, index) => (
//                   <div key={index} className="mb-4 border-b pb-6 education-entry ">
//                     <SecondaryText
//                       title={education.title}
//                       style={"font-semibold"}
//                     />
//                     <SecondaryText
//                       style={"lg:text-lg py-2"}
//                       title={`${education.institution} / ${education.duration}`}
//                     />
//                     <PrimaryText title={education.description} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="md:w-1/2  md:pl-4 lg:pl-8">
//           <div>
//             <div className="mb-8">
//               <SubHeading style={"lg:text-[28px]"} title={"My Experience"} />

//               <div className="border-l-2 border-l-dark-primary ps-4 mt-8 border-dark-primary">
//                 {experienceData.map((experience, index) => (
//                   <div key={index} className="mb-4 border-b pb-6 experience-entry">
//                     <SecondaryText
//                       title={experience.title}
//                       style={"font-semibold"}
//                     />
//                     <SecondaryText
//                       style={"lg:text-lg py-2"}
//                       title={`${experience.company} / ${experience.duration}`}
//                     />
//                     <PrimaryText title={experience.description} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center mt-8">
//         <Button
//           text="See More"
//           style="flex justify-center"
//         />
//       </div>
//     </div>
//   );
// };

// export default Resume;

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Sechead from "../components/Sechead";
import {
  PrimaryHeading,
  PrimaryText,
  SecondaryText,
  SubHeading,
} from "../components/Text";
import Button from "../components/Button";
import img1 from "../assets/images/Maju-logo.webp";
import img2 from "../assets/images/Preston-logo.jpg";
import img3 from "../assets/images/Asma Tech logo.png";
import img4 from "../assets/images/drive-logo.jpg";
import img5 from "../assets/images/ConvertX.jpg";
import img6 from "../assets/images/systems-logo.jpg";
import img7 from "../assets/images/systems-logo.jpg";
import img8 from "../assets/images/Arpatech-logo.jpg";
import img9 from "../assets/images/APAG-logo.jpg";
import img10 from "../assets/images/Efrotech-logo.jpg";
import img11 from "../assets/images/Intelligenes-logo.jpg";
import img17 from "../assets/images/Isc-logo.png";
import img15 from "../assets/images/school-logo.png";

const educationData = [
  {
    title: "Master of Science - MS, Computer Science ",
    institution: "Mohammad Ali Jinnah University (MAJU)",
    description: "2020 - 2022",
    image: img1,
  },
  {
    title: "Bachelor of Science - BS, Computer Science",
    institution: "Preston University",
    description: "2015 - 2019",
    image: img2,
  },
  {
    title: "HSC, Pre-Engineering",
    institution: "Govt Islamia Science College Karachi",
    description: "2010 – 2013",
    image: img17,
  },
  {
    title: " SSC, Computer Studies",
    institution: "Brilliant Career Secondary School",
    description: "2008 – 2010",
    image: img15,
  },
  // Add more education entries as needed
];

const experienceData = [
  {
    title: "Founder & CEO",
    company: "Asmatech Global",
    duration: "Full-time Jun 2023 - Present",
    description: "Karāchi, Sindh, Pakistan ",
    image: img3,
  },
  {
    title: "Head of Engineering ",
    company: "Drive Technologies",
    duration: "Full-time Mar 2023 - Present",
    description: "11 Dubai, United Arab Emirates · Hybrid",
    image: img4,
  },
  {
    title: "Head of Quality Assurance",
    company: "ConvrtX",
    duration: "Full-time  Nov 2022 - Aug 2023",
    description: "Toronto, Ontario, Canada · Remote",
    image: img5,
  },

  {
    title: "Senior Quality Assurance Consultant",
    company: "Systems Limited",
    duration: "Full-time Jan 2022 - Nov 2022",
    description: "Karāchi, Sindh, Pakistan",
    image: img6,
  },
  {
    title: "QA Consultant",
    company: "Systems Limited",
    duration: "Jul 2021 - Jan 2022",
    description: "Karāchi, Sindh, Pakistan",
    image: img7,
  },
  {
    title: "Senior Software Quality Assurance Engineer",
    company: "Arpatech (Pvt) Ltd (Pakistan Official)",
    duration: "Mar 2019 - Jun 2021",
    description: "Karachi, sindh, Pakistan",
    image: img8,
  },
  {
    title: "Technical Executive - SQA & Application Support",
    company: "(APAG) Agro Processor Atmospheric Gasses Pvt (Ltd)",
    duration: "Jun 2017 - Mar 2019",
    description: "karachi, sindh, Pakistan",
    image: img9,
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "EfroTech - Intelligent|Business|PEOPLE ",
    duration: "June 2015 - Jun 2017",
    description: "Shahrah-e-Faisal Karachi, sindh, Pakistan.",
    image: img10,
  },
  {
    title: "Software Quality Assurance Intern Intelligenes ",
    company: "Tariq Road, Dilkusha Forum",
    duration: "Oct 2014 - Dec 2014 ",
    description: "Karachi, sindh, Pakistan",
    image: img11,
  },

  // Add more experience entries as needed
];

const Resume = () => {
  const [showAllEntries, setShowAllEntries] = useState(false);

  const handleSeeMore = () => {
    setShowAllEntries(!showAllEntries);
  };
  return (
    <div className="container resumeContainer mx-auto py-8 md:py-20">
      <Sechead text="Resume" style={"mx-auto"} />
      <PrimaryHeading
        title={"A Summary of My Resume"}
        style={"w-full sm:w-[100%] text-center mb-8 mt-2"}
      />
      <div className="flex flex-col md:flex-row mt-2rem lg:mt-[4rem]">
        <div className="md:w-1/2 lg:pr-8">
          <div>
            <div className="mb-8 ">
              <SubHeading style={"lg:text-[28px]"} title={"My Education"} />
              <div className="border-s-2 border-s-dark-primary ps-4 mt-8 border-dark-primary">
                {educationData
                  .slice(0, showAllEntries ? educationData.length : 4)
                  .map((education, index) => (
                    <div
                      key={index}
                      className="flex justify-between mb-4 border-b pb-6 education-entry"
                    >
                      <div>
                        <SecondaryText
                          title={education.title}
                          style={"font-semibold"}
                        />
                        <SecondaryText
                          style={"lg:text-lg py-2"}
                          title={`${education.institution}`}
                        />
                        <PrimaryText
                          title={education.description}
                          className="w-[100%]"
                        />
                      </div>
                      <img
                        data-aos="zoom-in"
                        src={education.image}
                        alt={`Education ${index + 1}`}
                        className="mt-4 w-[50px] rounded-full h-[50px] object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  md:pl-4 lg:pl-8">
          <div>
            <div className="mb-8">
              <SubHeading style={"lg:text-[28px]"} title={"My Experience"} />
              <div className="border-l-2 border-l-dark-primary ps-4 mt-8 border-dark-primary">
                {experienceData
                  .slice(0, showAllEntries ? experienceData.length : 4)
                  .map((experience, index) => (
                    <div
                      key={index}
                      className="mb-4 border-b flex justify-between pb-6 experience-entry"
                    >
                      <div>
                        <SecondaryText
                          title={experience.title}
                          style={"font-semibold"}
                        />
                        <SecondaryText
                          style={"lg:text-lg py-2"}
                          title={`${experience.company} / ${experience.duration}`}
                        />
                        <PrimaryText title={experience.description} />
                      </div>
                      <img
                        data-aos="zoom-in"
                        src={experience.image}
                        alt={`Experience ${index + 1}`}
                        className="w-[50px] ml-4 h-[50px] rounded-full object-cover mt-4"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        {/* <Button
          text="See More"
          style="flex justify-center"
        /> */}
        <Button
          text={showAllEntries ? "See Less" : "See More"}
          style="flex justify-center"
          onClick={handleSeeMore}
        />
      </div>
    </div>
  );
};

export default Resume;

// const animateEntry = (entry) => {
//   gsap.from(entry, {
//     opacity: 0,
//     y: 20,
//     duration: 0.6,
//     scrollTrigger: {
//       trigger: ".resumeContainer",
//       start: "top center", // Adjust as needed
//       end: "bottom center", // Adjust as needed
//       scrub: 1, // Smoothly updates the animation as you scroll
//     },
//     ease: "power3.out",
//     stagger: 0.2,
//   });

//   gsap.to(entry, {
//     opacity: 1,
//     y: 0,
//     duration: 0.6,
//     scrollTrigger: {
//       trigger: ".resumeContainer",
//       start: "top center", // Adjust as needed
//       end: "bottom center", // Adjust as needed
//       scrub: 1, // Smoothly updates the animation as you scroll
//     },
//     ease: "power3.out",
//     stagger: 0.2,
//   });
// };

// useEffect(() => {
//   // Animation for education entries
//   const educationEntries = document.querySelectorAll(".education-entry");
//   animateEntry(educationEntries);

//   // Animation for experience entries
//   const experienceEntries = document.querySelectorAll(".experience-entry");
//   animateEntry(experienceEntries);
// }, []);
