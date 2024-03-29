import React, { useEffect } from "react";
import { PrimaryHeading, SecondaryText, SubHeading } from "../components/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../assets/icons/icons";
import Button from "../components/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  useEffect(() => {
    gsap.from(".contact-content", {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-section',
        start: "top 95%",
        end: "bottom 96%",
        scrub: 6,
      },
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.from(".contact-form", {
      opacity: 0,
      x: 150,
      duration: 1,
      scrollTrigger: {
        trigger: '.contact-section',
        start: "top 95%",
        end: "bottom 96%",
        scrub: 6,
      },
      ease: "power3.out",
      delay: 0.5,
    });
    gsap.to(".contact-content", {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.contact-section',
        start: "top 55%",
        end: "bottom 20%",
        // start: "top center",
        // end: "bottom center",
        scrub: 6,
      },
      ease: "power3.out",
      stagger: 0.2,
    });

    gsap.to(".contact-form", {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: '.contact-section',
        start: "top 95%",
        end: "bottom 96%",
        scrub: 6,
      },
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="bg-dark-primary contact-section py-10 md:py-20" id="Contact">
      <div className="container flex-wrap lg:flex-nowrap flex justify-between mx-auto gap-20">
        <div className="contact-content lg:w-[50%]">
          <PrimaryHeading
            style={"sm:w-[100%] lg:w-[100%]"}
            title={"Let's get in touch"}
          />
          <SecondaryText
            style={"py-12 "}
            title={
              "I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up."
            }
          />
          <SubHeading title={"Living In:"} />
          <SecondaryText
            style={""}
            title={"Karāchi, Sindh, Pakistan"}
          />
          <SubHeading title={"Call:"} style={"pt-6"} />
          <SecondaryText style={""} title={"+92 333-0379431"} />

                    <div className='contact-content-sociallinks flex gap-8 mt-16'>
                        <FontAwesomeIcon icon={Icons.Twitter} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <FontAwesomeIcon icon={Icons.Facebook} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <a target="blank" href="https://www.linkedin.com/in/muhammad-ahsan-a-9927b4a9/"><FontAwesomeIcon icon={Icons.LinkedIn} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        </a>
                    </div>

                </div>

        <div className="contact-form w-[100%] lg:w-[40%]">
          <PrimaryHeading
            style={"sm:w-[100%] lg:w-[100%]"}
            title={"Estimate your Project?"}
          />

          <form className="">
            <div className="pt-10">
              <SecondaryText
                style={"pb-4  md:text-[15px] lg:text-[16px]"}
                title={"What is Your Name:"}
              />
              <input
                required
                autoComplete="off"
                type="text"
                placeholder=""
                className="duration-300 ease-in-out h-6 outline-none border-b-2 focus:border-[black] bg-transparent  border-gray-400 w-[100%]"
              ></input>
            </div>

            <div className="pt-10">
              <SecondaryText
                style={"pb-4  md:text-[15px] lg:text-[18px]"}
                title={"Your Email Address:"}
              />
              <input
                required
                autoComplete="off"
                type="email"
                placeholder=""
                className="duration-300 ease-in-out h-6 outline-none border-b-2 focus:border-[black] bg-transparent  border-gray-400 w-[100%]"
              ></input>
            </div>

            <div className="pt-10">
              <SecondaryText
                style={"pb-4  md:text-[15px] lg:text-[18px]"}
                title={"How can I Help you?:"}
              />
              <textarea
                required
                autoComplete="off"
                className="duration-300 ease-in-out h-20 outline-none border-b-2 bg-transparent focus:border-[black] border-gray-400 border-[black] w-[100%]"
              ></textarea>
            </div>

            <Button
              text="Send "
              style="bg-dark-primary font-bold flex justify-center"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
