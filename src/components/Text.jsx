import React from "react";

export function PrimaryHeading(props) {
  return (
    <div
      className={`text-[45px] sm:text-[55px] lg:text-[80px] leading-[1] text-[#ffffff] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}
export function SubHeading(props) {
  return (
    <div
      className={`text-[35px] md:text-[45px] lg:text-[55px] leading-[1] text-[#ffffff] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}

export function SecondaryHeading(props) {
  return (
    <div
      className={` text-[34px] text-white  font-bold text-center lg:text-left ${props.style} `}
    >
      {props.title}
    </div>
  );
}
export function PrimaryText(props) {
  return (
    <div
      className={`text-[18px] text-gray-400 ${props.style}`}
    >
      {props.title}
    </div>
  );
}
