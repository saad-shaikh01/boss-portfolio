import React from 'react'
import { PrimaryHeading, SecondaryText, SubHeading } from '../components/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icons } from '../assets/icons/icons';
import Button from '../components/Button';

function Contact() {
    return (
        <div className='bg-dark-primary py-10 md:py-20' id="Contact">
            <div className='container flex-wrap lg:flex-nowrap flex justify-between mx-auto gap-20'>

                <div className='contact-content lg:w-[50%]'>

                    <PrimaryHeading style={"sm:w-[100%] lg:w-[100%]"} title={"Let's get in touch"} />
                    <SecondaryText style={"py-12 "} title={"I enjoy discussing new projects and design challenges. Please share as much info, as possible so we can get the most out of our first catch-up."} />
                    <SubHeading title={"Living In:"} />
                    <SecondaryText style={""} title={"30 Shacham street, Los Angeles, USA."} />
                    <SubHeading title={"Call:"} style={"pt-6"} />
                    <SecondaryText style={""} title={"(+060) 444 434 444"} />

                    <div className='contact-content-sociallinks flex gap-8 mt-16'>
                        <FontAwesomeIcon icon={Icons.Twitter} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <FontAwesomeIcon icon={Icons.LinkedIn} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <FontAwesomeIcon icon={Icons.GitHub} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <FontAwesomeIcon icon={Icons.Facebook} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                        <FontAwesomeIcon icon={Icons.Instagram} className='ease-in-out duration-500 hover:-translate-y-2 cursor-pointer text-black text-2xl' />
                    </div>

                </div>


                <div className='contact-form w-[100%] lg:w-[40%]'>
                    <PrimaryHeading style={"sm:w-[100%] lg:w-[100%]"} title={"Estimate your Project?"} />

                    <form className=''>

                        <div className='pt-10'>
                            <SecondaryText style={"pb-4  md:text-[15px] lg:text-[16px]"} title={"What is Your Name:"} />
                            <input required autoComplete='off' type='text' placeholder='' className='duration-300 ease-in-out h-6 outline-none border-b-2 focus:border-[black] bg-transparent  border-gray-400 w-[100%]'></input>
                        </div>

                        <div className='pt-10'>
                            <SecondaryText style={"pb-4  md:text-[15px] lg:text-[18px]"} title={"Your Email Address:"} />
                            <input required autoComplete='off' type='email' placeholder='' className='duration-300 ease-in-out h-6 outline-none border-b-2 focus:border-[black] bg-transparent  border-gray-400 w-[100%]'></input>
                        </div>

                        <div className='pt-10'>
                            <SecondaryText style={"pb-4  md:text-[15px] lg:text-[18px]"} title={"How can I Help you?:"} />
                            <textarea required autoComplete='off' className='duration-300 ease-in-out h-20 outline-none border-b-2 bg-transparent focus:border-[black] border-gray-400 border-[black] w-[100%]'></textarea>
                        </div>

                        <Button text="Send " style="bg-dark-primary font-bold flex justify-center" />

                    </form>
                </div>


            </div>
        </div>
    )
}

export default Contact
