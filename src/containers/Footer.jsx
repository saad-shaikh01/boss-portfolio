import React, { useEffect } from "react";
import { SecondaryText } from "../components/Text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
function Footer() {
  useEffect(() => {
    const textElements = document.querySelectorAll(".footer-text");

    gsap.from(textElements, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 95%",
        end: "bottom 0%",
        scrub: 6,
      },
      ease: "power3.out",
      stagger: 0.2,
    });
    gsap.to(textElements, {
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top 95%",
        end: "bottom 96%",
        scrub: 6,
      },
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="footer-section bg-[black] py-4 md:py-20">
      <div className="container mx-auto flex md:flex-nowrap flex-wrap gap-4 justify-center sm:justify-between text-sm">
        <SecondaryText
          style={"footer-text"}
          title={
            <span className="text-[10px] text-white md:text-sm lg:text-[18px] font-semibold">
              {" "}
              Copyright © 2024
              <span className="your-custom-style ml-2 text-dark-primary cursor-pointer hover:border-none ease-in-out duration-300 border-b border-dark-primary">
                Ahsan Akram{" "}
              </span>
              . All Rights Reserved.
            </span>
          }
        />

        <SecondaryText
          style={"footer-text"}
          title={
            <span className="text-[10px] text-white md:text-sm lg:text-[18px] font-semibold">
              {" "}
              Developed By
              <span className=" ml-2 your-custom-style text-dark-primary cursor-pointer hover:border-none ease-in-out duration-300 border-b border-dark-primary">
                AsmatechGlobal{" "}
              </span>
            </span>
          }
        />
      </div>
    </div>
  );
}
export default Footer;
