import React, {useEffect}  from 'react';
import videoSrc from '../assets/videos/Header-video.mp4';
import profile from '../assets/images/profile2.jpg';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryHeading , SecondaryText} from '../components/Text';
import { Icons } from '../assets/icons/icons';

function Hero() {
  useEffect(() => {
    const icon = document.getElementById('arrowIcon');
    icon.classList.add('opacity-100', 'animate-bounce');
  }, []); // Run this effect only once after the initial render

  return (
    <div className='relative h-[120vh] lg:h-[100vh]'>
      {/* Video */}
      <div className='absolute inset-0'>
        <video muted autoPlay loop className='h-full w-full object-cover'>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-center bg-dark-primary bg-opacity-90'>
        <div className='text-center'>

          <img src={profile} className='w-36 h-36 rounded-full border border-4 border-[white] mx-auto' />
          {/* <h1 className='text-4xl font-bold w-2/3 mx-auto py-8'>HELLO! I'M CALLUM SMITH - GRAPHIC DESIGNER, ILLUSTRATOR & ART DIRECTOR.</h1> */}
          <PrimaryHeading style={"mx-auto pt-4 sm:w-[100%] lg:w-[50%] sm:text-[22px]"}  title={"HELLO! I'M CALLUM SMITH - GRAPHIC DESIGNER, ILLUSTRATOR & ART DIRECTOR."} />
           <SecondaryText style={""} title={"based in Los Angeles, USA."} />
          <Button text="About Me" />

          <div id="arrowIcon" className='bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity'>
    
     <a href="#Know"> <FontAwesomeIcon icon={Icons.DownArrow} className='cursor-pointer text-black text-2xl mt-8' /> </a>

          </div>

        </div>
      </div>
      {/* Content End*/}
    </div>
  );
}

export default Hero;
