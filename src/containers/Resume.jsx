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
    title: "Master in Computer Engineering",
    institution: "Harvard University",
    duration: "2015 - 2017",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    title: "Master in Computer Engineering",
    institution: "Harvard University",
    duration: "2015 - 2017",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    title: "Master in Computer Engineering",
    institution: "Harvard University",
    duration: "2015 - 2017",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  // Add more education entries as needed
];

const experienceData = [
  {
    title: "Senior Software Engineer",
    company: "XYZ Corporation",
    duration: "2018 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    title: "Senior Software Engineer",
    company: "XYZ Corporation",
    duration: "2018 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
  },
  {
    title: "Senior Software Engineer",
    company: "XYZ Corporation",
    duration: "2018 - Present",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
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
                      style={"lg:text-[14px] py-2"}
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
                      style={"lg:text-[14px] py-2"}
                      title={`${experience.institution} / ${experience.duration}`}
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
