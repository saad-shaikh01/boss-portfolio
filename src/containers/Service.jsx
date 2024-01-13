import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PrimaryHeading, PrimaryText, SubHeading } from "../components/Text";
import { Icons } from "../assets/icons/icons";
import Sechead from "../components/Sechead";

gsap.registerPlugin(ScrollTrigger);
const servicesData = [
  {
    icon: Icons.uiUxDesign,
    title: "UI/UX Design",
    description:
      "Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Web Development",
    description:
      "We specialize in building robust and scalable web applications using cutting-edge technologies.",
  },
  {
    icon: Icons.mobileApp,
    title: "App Development",
    description:
      "Build feature-rich mobile applications that cater to the unique needs of your business and users.",
  },
  {
    icon: Icons.uiUxDesign,
    title: "UI/UX Design",
    description:
      "Our expert designers create intuitive and visually appealing user interfaces to enhance user experience.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Web Development",
    description:
      "We specialize in building robust and scalable web applications using cutting-edge technologies.",
  },
  {
    icon: Icons.mobileApp,
    title: "App Development",
    description:
      "Build feature-rich mobile applications that cater to the unique needs of your business and users.",
  },
];

const Service = () => {
  useEffect(() => {
    // Animation Logic
    gsap.utils.toArray(".service-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        scale: 0.5,
        rotation: -45,
        duration: 0.5,
        stagger: 0.2,
        // ease: "power3.out", // Experiment with different easing functions
        ease: "elastic.out(1, 0.3)", // Experiment with different easing functions
      });

      gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 95%",
          end: "bottom 96%",
          scrub: 6,
        },
        ease: "power3.out", // Use the same easing function for consistency
      });
    });
  }, []);

  return (
    <div className="bg-[#f8f9fa] py-10 md:py-20" id="Service">
      <div className="container mx-auto py-8">
        <Sechead text="What I Do?" style={"mx-auto"} />
        <PrimaryHeading
          title={"How I can help your next project"}
          style={"w-full sm:w-[100%] text-center mx-auto mb-8 lg:mt-8"}
        />

        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mt-2rem lg:mt-[4rem] service-item"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="mb-4 bg-white p-6 text-center rounded-lg shadow-md flex-grow">
                <div className="text-5xl mb-4 text-center text-dark-primary">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <SubHeading title={service.title} />
                <PrimaryText title={service.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
