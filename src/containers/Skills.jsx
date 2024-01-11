import React from 'react';
import { PrimaryHeading, SecondaryHeading } from "../components/Text";
import Button from '../components/Button';

function Skills() {
  const skillsData = [
    { title: 'Web Design', value: 70 },
    { title: 'JavaScript', value: 80 },
    { title: 'Angular Js', value: 70 },
    { title: 'HTML/CSS', value: 80 },
    { title: 'React JS', value: 70 },
    { title: 'Bootstrap', value: 80 },
    // Add more skills as needed
  ];

  const SkillProgress = ({ title, value }) => (
    <div className=''>
      <div className='flex justify-between items-center'>
        <SecondaryHeading style={"text-xl font-bold text-gray-900"} title={title} />
        <SecondaryHeading style={"text-xl font-bold text-gray-900"} title={`${value}%`} />
      </div>
      <progress
      
        value={value}
        max="100"
        className="w-full h-2"
        style={{ borderRadius: '4px' }} // Optional: Add border-radius for rounded corners
      ></progress>
      <style jsx>{`
        progress::-webkit-progress-value {
          background-color:  #E3EEEF;
          border-radius: 999px;}`}
        </style>
    </div>
  );

  return (
    <div className='container my-20 mx-auto'>
      <PrimaryHeading style={'mx-auto sm:w-[100%] w-[100%]'} title={'My Skills'} />

      {/* Progress Bar Starts here */}
      <div className='grid sm:grid-cols-2 gap-8 pt-8'>
        {skillsData.map((skill, index) => (
          <SkillProgress key={index} title={skill.title} value={skill.value} />
        ))}
      </div>

      <div className='flex justify-center mt-8'>
        <Button text="Download CV" style="flex justify-center" />
      </div>
    </div>
  );
}

export default Skills;
