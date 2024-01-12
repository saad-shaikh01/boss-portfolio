import React from "react";
import { PrimaryHeading, SecondaryText, PrimaryText , SecondaryHeading , } from "../components/Text";
import Sechead from "../components/Sechead";

function About() {
    return (
        <div className="container mx-auto my-12 md:my-20" id="Know">
            <div>

                <Sechead text="About Me" style={""}/>
                <PrimaryHeading
                    style={"mx-auto sm:w-[100%] text-start lg:text-center w-[100%]"}
                    title={"Know Me More"}
                />

                <div className="About-content flex-wrap lg:flex-nowrap gap-10 flex pt-10 justify-around  items-center">

                    <div className="w-[100%] lg:w-[70%]">
                        <h1 className="text-2xl sm:text-4xl pb-2">
                            Hi, I'm <span className="font-bold border-b border-b-4  border-dark-primary">Callum Smith</span>
                        </h1>
                        <SecondaryText
                            style={"mx-auto w-[100%]"}
                            title={
                                "I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."
                            }
                        />
                    </div>

                    <div className="w-[100%] lg:w-[40%] text-center">
                        <div className="bg-dark-primary flex items-center justify-center w-28 h-28 rounded-full mx-auto">
                            <p className=" w-[150px] text-[120px] font-bold">22</p>
                        </div>
                        <h1 className="text-4xl pb-2">
                            Years Of <span className="font-bold"> Experiance</span>
                        </h1>
                    </div>

                </div>


                <div className="About-content2 pt-20 flex gap-4 flex-wrap justify-between">

                    <div>
                        <PrimaryText style={"font-semibold"} title={"Name:"} />
                        <SecondaryHeading style={"text-xl font-extrabold sm:text-gray-900"} title={"Callum Smith"} />
                    </div>
                    <div>
                        <PrimaryText style={"font-semibold"} title={"Email:"} />
                        <SecondaryHeading style={"text-xl font-extrabold sm:text-gray-900"} title={"chat@callum.com"} />
                    </div>
                    <div>
                        <PrimaryText style={"font-semibold"} title={"Date Of Birth"} />
                        <SecondaryHeading style={"text-xl font-extrabold sm:text-gray-900"} title={"11, November 1987"} />
                    </div>
                    <div>
                        <PrimaryText style={"font-semibold"} title={"From:"} />
                        <SecondaryHeading style={"text-xl font-extrabold sm:text-gray-900"} title={"Los Angeles, USA."} />
                    </div>

                </div>


            </div>
        </div>
    );
}

export default About;
