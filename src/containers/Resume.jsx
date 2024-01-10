import React from "react";
import {
  PrimaryHeading,
  PrimaryText,
  SecondaryText,
  SubHeading,
} from "../components/Text";

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
  return (
    <div className="container mx-auto py-8">
      <PrimaryHeading
        title={"A Summary of My Resume"}
        style={"w-full text-center mb-8 mt-8"}
      />
      <div className="flex flex-col md:flex-row mt-2rem lg:mt-[4rem]">
        <div className="md:w-1/2 pr-8">
          <div>
            <div className="mb-8 ">
              <SubHeading style={"lg:text-[28px]"} title={"My Education"} />
              <div className="border-s ps-4 mt-8 border-dark-primary">
                {educationData.map((education, index) => (
                  <div key={index} className="mb-4 border-b pb-6 ">
                    <SecondaryText
                      title={education.title}
                      style={"font-semibold"}
                    />
                    <SecondaryText
                      style={"md:text-[16px] text-[15px]"}
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

              <div className="border-l ps-4 mt-8 border-dark-primary">
                {experienceData.map((experience, index) => (
                  <div key={index} className="mb-4 border-b pb-6">
                    <SecondaryText
                      title={experience.title}
                      style={"font-semibold"}
                    />
                    <SecondaryText
                      style={"md:text-[16px] text-[15px]"}
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
