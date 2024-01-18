import React, { useEffect } from "react";
import gsap from "gsap";
import Sechead from "../components/Sechead";
import {
  PrimaryHeading,
  PrimaryText,
  SecondaryText,
  SubHeading,
} from "../components/Text";

const animateEntry = (entry) => {
  gsap.from(entry, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".resumeContainer" ,
      start: "top center", // Adjust as needed
      end: "bottom center", // Adjust as needed
      scrub: 1, // Smoothly updates the animation as you scroll
    },
    ease: "power3.out",
    stagger: 0.2,
  });
  
  gsap.to(entry, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    scrollTrigger: {
      trigger: ".resumeContainer" ,
      start: "top center", // Adjust as needed
      end: "bottom center", // Adjust as needed
      scrub: 1, // Smoothly updates the animation as you scroll
    },
    ease: "power3.out",
    stagger: 0.2,
  });
};
const educationData = [
  {
    title: "Master of Science - MS, Computer Science ",
    institution: "Mohammad Ali Jinnah University (MAJU)",
    duration: "2020 - 2022",
  },
  {
    title: "Bachelor of Science - BS, Computer Science",
    institution: "Preston University",
    duration: "2015 - 2019",
  },
  {
    title: "HSC, Pre-Engineering",
    institution: "Govt Islamia Science College Karachi",
    duration: "2010 – 2013",
  },
{
  title: " SSC, Computer Studies",
  institution: "Brilliant Career Secondary School",
  duration: "2008 – 2010",
},
  // Add more education entries as needed
];

const experienceData = [
  {
    title: "Founder & CEO",
    company: "Asmatech Global",
    duration: "Full-time Jun 2023 - Present · Karāchi, Sindh, Pakistan ·",
  },
  {
    title: "Head of Engineering ",
    company: "Drive Technologies",
    duration: "Full-time Mar 2023 - Present · 11 Dubai, United Arab Emirates · Hybrid",
  },
  {
    title: "Head of Quality Assurance",
    company: "ConvrtX",
    duration: "Full-time  Nov 2022 - Aug 2023 · Toronto, Ontario, Canada · Remote",
  },
  
  {
    title: "Senior Quality Assurance Consultant",
    company: "Systems Limited",
    duration: "Full-time Jan 2022 - Nov 2022 Karāchi, Sindh, Pakistan",
  },
  {
    title: "QA Consultant",
    company: "Systems Limited",
    duration: "Jul 2021 - Jan 2022 Karāchi, Sindh, Pakistan",
  },
  {
    title: "Senior Software Quality Assurance Engineer",
    company: "Arpatech (Pvt) Ltd (Pakistan Official)",
    duration: "Mar 2019 - Jun 2021 Karachi, PakistanKarachi, Pakistan",
  },
  {
    title: "Technical Executive - SQA & Application Support",
    company: "(APAG) Agro Processor Atmospheric Gasses Pvt (Ltd)",
    duration: "Jun 2017 - Mar 2019 karachi, Pakistan",
  },
  {
    title: "Software Quality Assurance Engineer",
    company: "EfroTech - Intelligent|Business|PEOPLE ",
    duration: "June 2015 - Jun 2017 · Shahrah-e-Faisal Karachi, Pakistan.",
  },
  {
    title: "Software Quality Assurance Intern Intelligenes ",
    company: "Oct 2014 - Dec 2014 · Tariq Road, Dilkusha Forum Karachi, Pakistan",
    duration: "",
  },

  // Add more experience entries as needed
];

const Resume = () => {

  useEffect(() => {
    // Animation for education entries
    const educationEntries = document.querySelectorAll(".education-entry");
    animateEntry(educationEntries);

    // Animation for experience entries
    const experienceEntries = document.querySelectorAll(".experience-entry");
    animateEntry(experienceEntries);
  }, []);
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
                {educationData.map((education, index) => (
                  <div key={index} className="mb-4 border-b pb-6 education-entry ">
                    <SecondaryText
                      title={education.title}
                      style={"font-semibold"}
                    />
                    <SecondaryText
                      style={"lg:text-lg py-2"}
                      title={`${education.institution} / ${education.duration}`}
                    />
                    <PrimaryText title={education.description} />
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
                {experienceData.map((experience, index) => (
                  <div key={index} className="mb-4 border-b pb-6 experience-entry">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
