import React from 'react'
import { PrimaryHeading , SecondaryText } from '../components/Text';

function About() {
    return (
        <div className='min-h-[100vh] flex lg:px-32 justify-center items-center'>
            <div>
                <PrimaryHeading style={"mx-auto text-center w-[100%]"} title={"Know Me More"} />



                <div className='About-content flex pt-10 justify-around  items-center'>

                    <div className='w-[70%]'>
                        <h1 className='text-4xl pb-2'>Hi, I'm <span className='font-bold'>Callum Smith</span></h1>
                        <SecondaryText style={"mx-auto w-[100%]"} title={"I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto."} />
                    </div>




                    <div className='w-[50%] text-center'>
                        <div><p className='bg-dark-primary w-[100px] mx-auto'>22</p></div>
                        <h1 className='text-4xl pb-2'>Years Of <span className='font-bold'> Experiance</span></h1>
                    </div>







                </div>























            </div>
        </div>
    )
}

export default About
