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
    category: "Apps",
    image: `${require("../assets/images/portfolio/App1.png")}`,
    title: "MeMee",
    description: "MeMee will be user friendly application that provides meme creation tools. Social media functions, and meme competitions",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.rn.memee",
    appleStoreLink: "https://apps.apple.com/us/app/memee-app/id6444485595",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App2.png")}`,
    title: "Zumi",
    description: "Zumi will be an app that connects pet owners with RVNS who offer at-home or Virtual pet services",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.zumi.app.zumi_app",
    appleStoreLink: "https://apps.apple.com/in/app/zumi-app/id1668966726",

  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App3.png")}`,
    title: "StayBusy",
    description: "A platform that allows painting professionals to avoid downtime by connecting with companies and individuals that need their services",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.christian.staybusy",
    appleStoreLink: "https://apps.apple.com/us/app/stay-busy/id1670808390",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App4.png")}`,
    title: "The Fitness Hub",
    description: "The Fitness Hub will be a unique mobile application that will connect people who want to reach their fitness goals with personal trainers in their area",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.the.fitness_hub",
    appleStoreLink: "https://apps.apple.com/in/app/the-fitness-hub/id6446277686",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App5.png")}`,
    title: "Emerald Sun Tarot",
    description: "Emerald Sun Tarot will be a mobile app aimed at supporting an existing business of the same name and will offer users standard or ask-a- question tarot readings",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.emerald.suntarot",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App6.png")}`,
    title: "Queens of Ten",
    description: "Queens of ten is a card game that take players on a journey to unlock new cards & get the highest score among the challengers",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.torihampton.queenoften&pli=1",
    appleStoreLink: "https://apps.apple.com/us/app/queens-of-ten/id1672243186",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App7.png")}`,
    title: "Rainbow Surrogacy",
    description: "Rainbow Surrogacy that connects people together for surrogacy & introduces them to clinics that helps with deliveries & treatment",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.rainbow.surrogacy",
    appleStoreLink: "https://apps.apple.com/in/app/rainbow-surrogacy/id6444782288",
  },
  {
    category: "Apps",
    image: `${require("../assets/images/portfolio/App8.png")}`,
    title: "AxessEQ",
    description: "AxessEQ will be a web - and mobile-based professional networking site focused on diversity equity and inclusion for minorities and historically disadvantaged groups",
    androidStoreLink: "https://play.google.com/store/apps/details?id=com.axesseq",
    appleStoreLink: "https://apps.apple.com/us/app/axesseq/id6444820689",
  },
 

   // Websites projects...
  {
    category: "Websites",
    image: `${require("../assets/images/drivetechweb.png")}`,
    title: "Drive technology",
    description: "DriveTechnologies is a cutting-edge software company headquartered in the United Arab Emirates (UAE), dedicated to revolutionizing the technological landscape.",
    webLink: "https://www.drivetechnology.co/"
  },
  {
    category: "Websites",
    image: `${require("../assets/images/Axesseqweb.png")}`,
    title: "AxessEQ",
    description: "AxessEQ serves as a social media platform committed to fostering equity and inclusion for people of color. ",
    webLink: "https://www.axesseq.com/"
  },

  {
    category: "Websites",
    image: `${require("../assets/images/terragrowweb.png")}`,
    title: "Terragrow",
    description: "Terragrow is an agritech startup that has taken the farming industry by storm with its groundbreaking approach to Hydroponic Greenhouse Farming.",
    webLink: "https://terra-grow.com/"
  },

  {
    category: "Websites",
    image: `${require("../assets/images/Asmatechweb.png")}`,
    title: "Asmatech Global",
    description: " Asmatech Global is a new start-up and software development company specializing in delivering innovative and tailored solutions.",
    webLink: "https://www.asmatechglobal.com/"
  },


];

const categories = ["All", "Apps", "Websites",];

const Works = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
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
          start: "top 80%",
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
          start: "top 80%",
        },
      });
    });

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
                  className="h-[100%] w-[100%] object-cover border-2 rounded-md border-dark-primary"
                />
                <div className="hidden lg:flex absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white text-center">
                  <p className="hidden lg:block font-bold text-lg lg:text-2xl">{project.title}</p>
                  <p className="hidden lg:block px-4 leading-4 lg:leading-5 pt-1">{project.description}</p>
                </div>
              </div>
            ))}
        </div>

        <Modal
          isOpen={selectedProject !== null}
          onRequestClose={handleCloseModal}
          contentLabel="Project Modal"
          className="modal-content"
          closeTimeoutMS={200}
        >
          <button className="modal-close" onClick={handleCloseModal}>
            &times;
          </button>
          {selectedProject && (
            <div className=" flex gap-10 items-center -4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-[60%] hidden xl:block h-[300px] position-start object-cover"
              />
              <div>
                <p className="font-bold text-2xl pb-4">{selectedProject.title}</p>
                <p className="pb-4 text-gray-500">{selectedProject.description}</p>

                {selectedProject.androidStoreLink && (
  <div className="my-8">
    <h2 className="font-bold pb-1">Android Store</h2>
    <p>
      <a
        href={selectedProject.androidStoreLink}
        className="text-[blue] underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Android Store Link
      </a>
    </p>
  </div>
)}

{selectedProject.appleStoreLink && (
  <div className="my-8">
    <h2 className="font-bold pb-1">Apple Store</h2>
    <p>
      <a
        href={selectedProject.appleStoreLink}
        className="text-[blue] underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apple Store Link
      </a>
    </p>
  </div>
)}

{selectedProject.webLink && (
  <div className="my-8">
    <h2 className="font-bold pb-1">Website</h2>
    <p>
      <a
        href={selectedProject.webLink}
        className="text-[blue] underline"
        target="_blank"
        rel="noopener noreferrer"
      >
       Website Link
      </a>
    </p>
  </div>
)}


              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Works;