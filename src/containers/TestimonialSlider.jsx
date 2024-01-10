import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrimaryHeading, PrimaryText, SecondaryText } from "../components/Text";

const testimonialData = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    clientName: "John Doe",
    designation: "CEO, Company XYZ",
    image: `${require("../assets/images/profile2.jpg")}`, // Replace with image URL or path
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    clientName: "John Doe",
    designation: "CEO, Company XYZ",
    image: `${require("../assets/images/profile2.jpg")}`, // Replace with image URL or path
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a anteLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante..",
    clientName: "John Doe",
    designation: "CEO, Company XYZ",
    image: `${require("../assets/images/profile2.jpg")}`, // Replace with image URL or path
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
      <div className="h-4 w-4 mx-2 mt-10  bg-gray-500 rounded-full hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"></div>
    ),
    prevArrow: (
      <button className="slick-prev" style={{ display: "none" }}></button>
    ),
    nextArrow: (
      <button className="slick-next" style={{ display: "none" }}></button>
    ),
  };

  return (
    <div className="bg-gray-400 py-[6rem]">
      <div className="container w-[60%]  mx-auto lg:my-[4rem]">
        <div>
          <PrimaryHeading
            title={"What Some of my Clients Say"}
            style={"w-full text-center text-white"}
          />
        </div>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="text-center mt-10">
              <SecondaryText title={testimonial.content} style={"text-white"} />
              <div className="flex justify-center items-center my-4 ">
                <div className="rounded-full overflow-hidden h-16 w-16 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.clientName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <PrimaryText
                    title={testimonial.clientName}
                    style={"font-semibold text-white"}
                  />
                  <PrimaryText
                    title={testimonial.designation}
                    style={"text-white  text-[14px]"}
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
