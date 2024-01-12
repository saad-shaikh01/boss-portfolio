import React from 'react'
import { PrimaryHeading, SecondaryText, PrimaryText , SecondaryHeading , } from "../components/Text";
import Button from '../components/Button';

function Hire() {
  return (
    <div className='Hire-main h-[60vh] flex justify-center items-center'>

        <div>
         <PrimaryHeading style={"mx-auto font-bold text-white text-center sm:w-[100%] w-[100%]"} title={"Interested in working with me?"}/>
         <div className=' flex justify-center mt-8'>
      <Button text="Hire Me !" style="bg-dark-primary flex justify-center" />
      </div>
        </div>
     
    </div>
  )
}

export default Hire
