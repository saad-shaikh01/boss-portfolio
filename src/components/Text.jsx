import React from "react";

export function PrimaryHeading(props) {
  return (
    <div
      className={`text-[20px] sm:text-[45px] lg:text-4xl w-[100%]  sm:w-1/2 leading-[1] text-dark-black  font-space-grotesk font-bold mb-4  ${props.style}`}
    >
      {props.title}
    </div>
  );
}
export function SubHeading(props) {
  return (
    <div
      className={`text-[16px] sm:text-[20px] md:text-[20px] lg:text-[24px] leading-[1] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}

export function SecondaryHeading(props) {
  return (
    <div
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
      className={` md:text-[20px] lg:text-[22px] ${props.style}`}
    >
      {props.title}
    </div>
  );
}
