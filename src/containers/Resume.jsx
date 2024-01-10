import React from 'react';
import { PrimaryHeading, SubHeading } from '../components/Text';

const educationData = [
  {
    title: 'Master in Computer Engineering',
    institution: 'Harvard University',
    duration: '2015 - 2017',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  {
    title: 'Master in Computer Engineering',
    institution: 'Harvard University',
    duration: '2015 - 2017',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  {
    title: 'Master in Computer Engineering',
    institution: 'Harvard University',
    duration: '2015 - 2017',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  // Add more education entries as needed
];

const experienceData = [
  {
    title: 'Senior Software Engineer',
    company: 'XYZ Corporation',
    duration: '2018 - Present',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'XYZ Corporation',
    duration: '2018 - Present',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'XYZ Corporation',
    duration: '2018 - Present',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.',
  },
  // Add more experience entries as needed
];

const Resume = () => {
  return (
    <div className="container mx-auto py-8">
        <PrimaryHeading title={"A Summary of My Resume"} style={'w-full text-center mb-8 mt-8'} />
            {/* <h2 className="text-3xl font-bold mb-4">A Summary of My Resume</h2> */}
      <div className="flex flex-col md:flex-row mt-2rem lg:mt-[4rem]">
        <div className="md:w-1/2 pr-8">
          <div>
            <div className="mb-8">
                <SubHeading title={"My Education"} />
              {/* <h3 className="text-lg font-bold mb-2">My Education</h3> */}
              {educationData.map((education, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-xl font-bold">{education.title}</h4>
                  <p className="text-sm italic">{education.institution} / {education.duration}</p>
                  <p>{education.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-1/2 pl-8">
          <div>
            <div className="mb-8">
            <SubHeading title={"My Experience"} />

              {/* <h3 className="text-lg font-bold mb-2">My Experience</h3> */}
              {experienceData.map((experience, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-xl font-bold">{experience.title}</h4>
                  <p className="text-sm italic">{experience.company} / {experience.duration}</p>
                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;