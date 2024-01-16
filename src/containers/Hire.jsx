// import React from 'react'
// import { PrimaryHeading, SecondaryText, PrimaryText , SecondaryHeading , } from "../components/Text";
// import Button from '../components/Button';

// function Hire() {
//   return (
//     <div className='Hire-main h-[60vh] flex justify-center items-center'>

//         <div>
//          <PrimaryHeading style={"mx-auto font-bold text-white text-center sm:w-[100%] w-[100%]"} title={"Interested in working with me?"}/>
//          <div className=' flex justify-center mt-8'>
//       <Button text="Hire Me !" style="bg-dark-primary flex justify-center" />
//       </div>
//         </div>
     
//     </div>
//   )
// }

// export default Hire


import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { PrimaryHeading } from '../components/Text';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

function Hire() {
  useEffect(() => {
    // Simple fade-in animation using GSAP
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Hire-main",
        start: "top 95%",
        end: "bottom 96%",
        scrub: 4,
      },
    });

    tl.from('.Hire-content', { opacity: 0, scale: 0.7 ,  duration: 5 });
    tl.to('.Hire-content', { opacity: 1, scale: 1 ,  duration: 5 });
  }, []);

  return (
    <div className='Hire-main h-[60vh] flex justify-center items-center'>
      <div className='Hire-content'>
        <PrimaryHeading
          style={'mx-auto font-bold text-white text-center sm:w-[100%] w-[100%]'}
          title={'Interested in working with me?'}
        />
        <div className='flex justify-center mt-8'>
          <a href="#Contact"><Button text='Hire Me !' style='bg-dark-primary flex justify-center' /></a>
        </div>
      </div>
    </div>
  );
}

export default Hire;
