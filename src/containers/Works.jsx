// import React, { useState, useEffect } from "react";
// import { PrimaryHeading } from "../components/Text";
// import Sechead from "../components/Sechead";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     category: "Category2",
//     image: `${require("../assets/images/portfolio/project-1.jpg")}`,
//     title: "Project 1",
//     description: "Description 1",
//   },
//   {
//     category: "Category2",
//     image: `${require("../assets/images/portfolio/project-2.jpg")}`,
//     title: "Project 2",
//     description: "Description 2",
//   },
//   {
//     category: "Category1",
//     image: `${require("../assets/images/portfolio/project-3.jpg")}`,
//     title: "Project 3",
//     description: "Description 3",
//   },
//   {
//     category: "Category4",
//     image: `${require("../assets/images/portfolio/project-4.jpg")}`,
//     title: "Project 1",
//     description: "Description 1",
//   },
//   {
//     category: "Category1",
//     image: `${require("../assets/images/portfolio/project-5.jpg")}`,
//     title: "Project 2",
//     description: "Description 2",
//   },
//   {
//     category: "Category3",
//     image: `${require("../assets/images/portfolio/project-6.jpg")}`,
//     title: "Project 3",
//     description: "Description 3",
//   },
//   // Add more projects...
// ];

// const categories = ["All", "Category1", "Category2", "Category3", "Category4"];

// export default function Works() {
//   const [currentCategory, setCurrentCategory] = useState("All");

//   return (
//     <div className="bg-[#f8f9fa] py-2 lg:py-[4rem]" id="Work">
//       <div className="container mx-auto">
//         <div>
//         <Sechead text="Portfolio" style={"mx-auto"}/>
//           <PrimaryHeading
//             title={"Some of my most recent projects"}
//             style={"w-full sm:w-[100%] text-center mb-8 lg:mb-[4rem] mt-2"}
//           />
//         </div>

//         <nav className="text-center mb-[1rem]">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className={`mr-4 w-[50%] mx-auto md:w-[auto] px-3 pb-1 font-semibold text-gray-400 hover:text-black hover:border-b-2 hover:border-dark-primary ${
//                 currentCategory === category
//                   ? "text-[#000000] border-b-2 border-dark-primary "
//                   : ""
//               }`}
//               onClick={() => setCurrentCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </nav>

//         <div className="md:flex justify-center flex-wrap p-4  ">
//           {projects
//             .filter(
//               (project) =>
//                 currentCategory === "All" ||
//                 project.category === currentCategory
//             )
//             .map((project, index) => (
//               <div key={index} className="w-[100%] md:w-[30%] my-2 sm:m-4 relative cursor-pointer">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-auto object-cover"
//                 />
//                 <div className="absolute inset-0 flex flex-col  items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
//                   {/* <div className="mt-2"> */}
//                   <p>{project.title}</p>
//                   <p>{project.description}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { PrimaryHeading } from "../components/Text";
import Sechead from "../components/Sechead";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "react-modal";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-1.jpg")}`,
    title: "Project 1",
    description: "Description 1",
  },
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-2.jpg")}`,
    title: "Project 2",
    description: "Description 2",
  },
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-3.jpg")}`,
    title: "Project 3",
    description: "Description 3",
  },
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-4.jpg")}`,
    title: "Project 1",
    description: "Description 1",
  },
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-5.jpg")}`,
    title: "Project 2",
    description: "Description 2",
  },
  {
    category: "Category1",
    image: `${require("../assets/images/portfolio/project-6.jpg")}`,
    title: "Project 3",
    description: "Description 3",
  },
  // Add more projects...
];

const categories = ["All", "Category1", "Category2", "Category3", "Category4"];

const Works = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project for the modal

  useEffect(() => {
    // Animation for each project card on scroll
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        x: 150,
        scale: 0.5,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Adjust as needed
        },
      });
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Adjust as needed
        },
      });
    });

    // Animation for project cards when a category is clicked
    const categoryButtons = document.querySelectorAll(".category-button");

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setCurrentCategory(button.textContent);
        gsap.from(projectCards, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });
      });
    });
  }, [currentCategory]);
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  return (
    <div className="bg-[#f8f9fa] py-2 lg:py-[4rem]" id="Work">
      <div className="container mx-auto">
        <div>
          <Sechead text="Portfolio" style={"mx-auto"} />
          <PrimaryHeading
            title={"Some of my most recent projects"}
            style={"w-full sm:w-[100%] text-center mb-8 lg:mb-[4rem] mt-2"}
          />
        </div>

        <nav className="text-center mb-[1rem]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`mr-4 w-[50%] mx-auto md:w-[auto] px-3 pb-1 font-semibold text-gray-400 hover:text-black hover:border-b-2 hover:border-dark-primary category-button ${
                currentCategory === category
                  ? "text-[#000000] border-b-2 border-dark-primary "
                  : ""
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="md:flex justify-center flex-wrap p-4">
          {projects
            .filter(
              (project) =>
                currentCategory === "All" ||
                project.category === currentCategory
            )
            .map((project, index) => (
              <div
                key={index}
                className="w-[100%] md:w-[30%] my-2 sm:m-4 relative cursor-pointer project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col  items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
        </div>

        <Modal
          isOpen={selectedProject !== null}
          onRequestClose={handleCloseModal}
          contentLabel="Project Modal"
          className="modal-content"
          // overlayClassName="project-modal-overlay"
          closeTimeoutMS={200}
        >
          <button className="modal-close" onClick={handleCloseModal}>
            &times;
          </button>
          {selectedProject && (
            <div className=" flex gap-10 p-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-[30%] h-auto object-cover"
              />
              <div>
                <p>{selectedProject.title}</p>
                <p>{selectedProject.description}</p>
                {/* <Button
                  text="view link "
                  style="flex justify-center"
                  
                /> */}
                <a href="https://www.youtube.com/" target="blank" >here is projec</a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Works;
