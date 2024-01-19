import React from "react";

export function PrimaryHeading(props) {
  return (
    <div
    data-aos="zoom-in-up"
      className={`text-[20px] sm:text-[30px] lg:text-4xl w-[100%]  sm:w-1/2 leading-[1] text-dark-black  font-space-grotesk font-bold mb-4  ${props.style}`}
    >
      {props.title}
    </div>
  );
}
export function SubHeading(props) {
  return (
    <div
      className={`text-[16px] sm:text-[20px] md:text-[20px] lg:text-[18px] xl:text-[24px] leading-[1] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}

export function SecondaryHeading(props) {
  return (
    <div
    data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className={`text-[34px]  font-bold text-center lg:text-left ${props.style} `}
    >
      {props.title}
    </div>
  );
}
export function PrimaryText(props) {
  return (
    <div className={`text-[18px] text-gray-400 ${props.style}`}>
      {props.title}
    </div>
  );
}
export function SecondaryText(props) {
  return (
    <div
    data-aos="fade-right"
    data-aos-duration="9000" 
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
      className={`md:text-[20px] lg:text-[22px] ${props.style}`}
    >
      {props.title}
    </div>
  );
}
