// import React from 'react';
// import { PrimaryHeading, SecondaryHeading } from "../components/Text";
// import Button from '../components/Button';

// function Skills() {
//   const skillsData = [
//     { title: 'Web Design', value: 70 },
//     { title: 'JavaScript', value: 80 },
//     { title: 'Angular Js', value: 70 },
//     { title: 'HTML/CSS', value: 80 },
//     { title: 'React JS', value: 70 },
//     { title: 'Bootstrap', value: 80 },
//     // Add more skills as needed
//   ];

//   const SkillProgress = ({ title, value }) => (
//     <div className=''>
//       <div className='flex justify-between items-center'>
//         <SecondaryHeading style={"text-xl font-bold text-gray-900"} title={title} />
//         <SecondaryHeading style={"text-xl font-bold text-gray-900"} title={`${value}%`} />
//       </div>
//       <progress

//         value={value}
//         max="100"
//         className="w-full h-2"
//         style={{ borderRadius: '4px' }} // Optional: Add border-radius for rounded corners
//       ></progress>
//      <style jsx>{`
//   progress::-webkit-progress-bar {
//     background-color: #e8ecef;
//     border-radius: 999px;
//   }

//   progress::-webkit-progress-value {
//     background-color: #d1ee2d;
//     border-radius: 999px;
//   }
// `}</style>

//     </div>
//   );

//   return (
//     <div className='container my-20 mx-auto'>
//       <PrimaryHeading style={'mx-auto sm:w-[100%] w-[100%]'} title={'My Skills'} />

//       {/* Progress Bar Starts here */}
//       <div className='grid sm:grid-cols-2 gap-8 pt-8'>
//         {skillsData.map((skill, index) => (
//           <SkillProgress key={index} title={skill.title} value={skill.value} />
//         ))}
//       </div>

//       <div className='flex justify-center mt-8'>
//         <Button text="Download CV" style="flex justify-center" />
//       </div>
//     </div>
//   );
// }

// export default Skills;

import React, {useState, useEffect } from "react";
import { PrimaryHeading, SecondaryHeading } from "../components/Text";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Counter from "../components/counter";
import Modal from 'react-modal';
gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const skillsData = [
    { title: "Technology Strategy", value: 90 },
    { title: "Leadership and Mentoring", value: 95 },
    { title: "Consulting and Advisory", value: 80 },
    { title: "Product Development", value: 80 },
    { title: "Agile Development Methodologies", value: 80 },
    { title: "Quality Assurance and Testing", value: 80 },
    { title: "Maintenance and Support", value: 80 },
    { title: "Full-Stack Development", value: 90 },
    { title: "Custom Software Development", value: 90 },
    { title: "Digital Transformation", value: 90 },
    { title: "Data Analytics", value: 80 },
    { title: "Cloud Computing", value: 80 },
    { title: "Artificial Intelligence", value: 80 },
    { title: "Machine Learning", value: 80 },
    { title: "Internet of Things IoT", value: 80 },
    { title: "Cybersecurity", value: 80 },
    { title: "User Experience UX Design", value: 95 },
    { title: "Project Management", value: 90 },
    { title: "Team Management", value: 90 },
    { title: "Communication Skills", value: 95 },
    { title: "Strategic Planning", value: 90 },
    { title: "Innovation Management", value: 80 },
    { title: "Risk Management", value: 90 },
    { title: "Agile Project Management", value: 80 },
    { title: "System Integration", value: 80 },
    { title: "Performance Optimization", value: 80 },
    { title: "Problem Diagnosis and Troubleshooting", value: 80 },
    { title: "Technical Documentation", value: 90 },
    { title: "Software Architecture and Design Patterns", value: 90 },
  ];

  const SkillProgress = ({ title, value }) => {
    useEffect(() => {
      const formattedTitle = title.replace(/\s+/g, "_"); // Replace spaces with underscores
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: `.progress-bar-${formattedTitle}`,
          start: "top 80%", // Adjust this value according to your preference
        },
      });

      tl.fromTo(
        `.progress-bar-${formattedTitle}`,
        { width: "0%" },
        { width: `${value}%`, duration: 3 }
      );
    }, [title, value]);

    return (
      <div className="relative overflow-hidden">
        <div className="flex justify-between items-center">
          <SecondaryHeading
            style={"text-xl font-bold text-gray-900"}
            title={title}
          />

          <Counter
            style={"text-xl font-bold text-gray-900"}
            number={`${value}`}
            sign={"%"}
            duration={30}
          />
        </div>
        <div className={`progress-bar-${title.replace(/\s+/g, "_")}`}>
          <progress
            value={value}
            max="100"
            className="w-full h-2"
            style={{ borderRadius: "4px" }}
          ></progress>
        </div>
      </div>
    );
  };

  return (
    <div className="container my-20 mx-auto">
      <PrimaryHeading
        style={"mx-auto sm:w-[100%] w-[100%]"}
        title={"My Skills"}
      />

      {/* Progress Bar Starts here */}
      <div className="grid sm:grid-cols-2 gap-8 pt-8">
        {skillsData.slice(0, 6).map((skill, index) => (
          <SkillProgress key={index} title={skill.title} value={skill.value} />
        ))}
      </div>

      {/* <div className="flex justify-center mt-8">
        <Button text="Load More" style="flex justify-center" />
      </div> */}

      <div className="flex justify-center mt-8">
        <Button
          text="Load More"
          style="flex justify-center"
          onClick={handleOpenModal}
        />
      </div>


      <Modal
        isOpen={isModalOpen}
        // onRequestClose={handleCloseModal}
        contentLabel='Skill Modal'
        className='modal-content'
        // overlayClassName='modal-overlay'
        // closeTimeoutMS={200}
      >
        <button className='modal-close' onClick={handleCloseModal}>
          &times;
        </button>

        {/* Skills Display in Modal */}
        <div className='grid sm:grid-cols-2 gap-8 pt-8'>
          {skillsData.map((skill, index) => (
            <SkillProgress key={index} title={skill.title} value={skill.value} />
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default Skills;
