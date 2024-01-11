import React, { useState } from "react";
import { PrimaryHeading } from "../components/Text";

const projects = [
  {
    category: "Category2",
    image: `${require("../assets/images/portfolio/project-1.jpg")}`,
    title: "Project 1",
    description: "Description 1",
  },
  {
    category: "Category2",
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
    category: "Category4",
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
    category: "Category3",
    image: `${require("../assets/images/portfolio/project-6.jpg")}`,
    title: "Project 3",
    description: "Description 3",
  },
  // Add more projects...
];

const categories = ["All", "Category1", "Category2", "Category3", "Category4"];

export default function Works() {
  const [currentCategory, setCurrentCategory] = useState("All");

  return (
    <div className="bg-gray-200 py-[4rem]">
      <div className="container">
        <div>
          <PrimaryHeading
            title={"Some of my most recent projects"}
            style={"w-full text-center mb-8 lg:mb-[4rem] mt-8"}
          />
        </div>

        <nav className="text-center mb-[1rem]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`mr-4 px-3 pb-1 font-semibold text-gray-400 hover:text-black hover:border-b-2 hover:border-dark-primary ${
                currentCategory === category
                  ? "text-[#000000] border-b-2 border-dark-primary "
                  : ""
              }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        <div className="flex  justify-center flex-wrap p-4  ">
          {projects
            .filter(
              (project) =>
                currentCategory === "All" ||
                project.category === currentCategory
            )
            .map((project, index) => (
              <div key={index} className="w-[30%] m-4 relative cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto object-cover"
                />
                <div className="absolute inset-0 flex flex-col  items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                  {/* <div className="mt-2"> */}
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
