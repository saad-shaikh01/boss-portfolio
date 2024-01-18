import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryHeading, PrimaryText, SecondaryText } from "../components/Text";
import Sechead from "../components/Sechead";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const testimonialData = [
  {
    content:
      "he was very knowledgeable and good at explaining concepts, was available when I need help, it was nice working with him, will definitely rehire",
    clientName: "Jade Hu",
    designation: "Canada",
 // Replace with image URL or path
  },
  {
    content:
      "Freelancer completed an urgent task on time and successfully. Definitely recommended and will hire again if needed for future projects.",
    clientName: "Karina T",
    designation: "USA",
  },
  {
    content:
      "Muhammad Ahsan Akram was a great asset to finish my project. He was very dedicated to get to the ins & outs of my expectations & delivered accordingly.",
    clientName: "Ekrem Gencaslan",
    designation: "Germany",
  },
  {
    content:
      "It was a really good experience working with Muhammad Ahsan Akram! He was exceptional at his work ! Delivered the requirement quick and perfect! Looking forward to working with him..",
    clientName: "Carl Vagfelt Nihlmar",
    designation: "USA",
  },

  {
    content:
      "Muhammad Ahsan Akram has done a great job on the work. he is very responsive. He takes our Feedback and update the work.",
    clientName: "Marie Kerrin",
    designation: "Singapore",
  },

  {
    content:
      "Thank You, Muhammad Ahsan Akram, For completing the SQL exercise review early and being communicative throughout the project.",
    clientName: "Audrey Espey",
    designation: "USA",
  },

  {
    content:
      "Thank You Muhammad Ahsan Akram , for helping us with this project. You have been a great help to us in this project. He patiently cleared all the doubts.",
    clientName: "Nisha Bhatt",
    designation: "India",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="h-4 w-4 mx-2 mt-10  bg-gray-500 rounded-full hover:bg-dark-primary active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"></div>
    ),
    prevArrow: (
      <button className="slick-prev" style={{ display: "none" }}></button>
    ),
    nextArrow: (
      <button className="slick-next" style={{ display: "none" }}></button>
    ),
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".testimonial-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        ease: "power3",
      });
      gsap.to(item, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#929597] pb-28 pt-10 lg:py-[6rem]" id="Review">
      <div className="container w-[90%]  mx-auto lg:my-[4rem]">
        <div>
          <Sechead text="Client Speak" style={"mb-8 mx-auto"} />
          <PrimaryHeading
            title={"What Some of my Clients Say"}
            style={
              "w-full lg:w-[100%] sm:w-[100%] text-[15px] text-center text-white"
            }
          />
        </div>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="testimonial-item text-center mt-10">
              <SecondaryText
                title={testimonial.content}
                style={"lg:w-[90%] mx-auto text-white"}
              />
              <div className="flex justify-center items-center my-4 ">
                <div className="ml-4">
                  <PrimaryText
                    title={testimonial.clientName}
                    style={"font-semibold text-[19px] lg:text-[wheat] text-[wheat]"}
                  />
                  <PrimaryText
                    title={testimonial.designation}
                    style={"text-white  text-[15px]"}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
