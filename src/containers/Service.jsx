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
    icon: Icons. Microchip,
    title: "Technology Strategy",
    description:
      "Muhammad Ahsan can help businesses develop a comprehensive technology strategy that aligns with their goals and objectives. This includes identifying opportunities for digital transformation, implementing innovative technologies, and optimizing existing systems.",
  },
  {
    icon: Icons.ConnectDevelop,
    title: "Product Development",
    description:
      "With his expertise in product development, Muhammad can assist businesses in conceptualizing and creating innovative digital products that meet market demands. He can guide the entire product development lifecycle, from ideation and prototyping to testing and launch.",
  },
  {
    icon: Icons.DigitalOcean,
    title: "Digital Transformation",
    description:
      "Muhammad Ahsan understands the importance of digital transformation in today's business environment. He can help businesses embrace digital technologies, streamline operations, and enhance customer experiences through the implementation of digital solutions such as cloud computing, data analytics, and artificial intelligence.",
  },
  {
    icon: Icons.PeopleGroup,
    title: "Leadership and Mentoring",
    description:
      "With his experience as an entrepreneur and technology leader, Muhammad provides leadership and mentoring services to help businesses and individuals navigate the complexities of the digital world. He can offer guidance on strategic decision-making, team management, and fostering a culture of innovation.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Consulting and Advisory",
    description:
      "Muhammad Ahsan offers consulting and advisory services to businesses seeking expert insights and guidance in areas such as technology adoption, digital marketing strategies, cybersecurity, and IT infrastructure planning.",
  },
  {
    icon: Icons.webDevelopment,
    title: "Full-Stack Development",
    description:
      "Muhammad Ahsan has expertise in both front-end and back-end development, enabling him to create end-to-end software solutions. From user interface design and development to server-side programming and database integration, he can build comprehensive applications that deliver a seamless user experience.",
  },
  {
    icon: Icons. ArrowsSplitUpAndLeft,
    title: "Agile Development Methodologies",
    description:
      "Muhammad Ahsan follows agile development methodologies to ensure efficient and iterative software development. By embracing agile principles, he can adapt to changing requirements, foster collaboration, and deliver high-quality software within shorter development cycles.",
  },
  {
    icon: Icons.mobileApp,
    title: "Quality Assurance and Testing",
    description:
      "Muhammad Ahsan understands the importance of delivering bug-free and reliable software. He employs rigorous quality assurance and testing practices to identify and resolve any issues during the development process, ensuring that the final product meets the highest standards of quality.",
  },
  {
    icon: Icons.Headset,
    title: "Maintenance and Support",
    description:
      "After the software is deployed, Muhammad provides ongoing maintenance and support services to ensure the smooth operation of the application. This includes bug fixes, updates, and enhancements to keep the software up-to-date and optimized.",
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
