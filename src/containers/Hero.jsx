import React from 'react';
import videoSrc from '../assets/videos/Header-video.mp4';
import profile from '../assets/images/profile2.jpg';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


function Hero() {
  return (
    <div className='relative h-[100vh]'>
      {/* Video */}
      <div className='absolute inset-0'>
        <video muted autoPlay loop className='h-full w-full object-cover'>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-90'>
        <div className='text-white text-center'>

          <img src={profile} className='w-36  h-36 rounded-full border border-4 border-[white]'/>
          <Button text="About Me" />



          <FontAwesomeIcon icon={faThumbsUp} className='text-[black]'/>


























        </div>
      </div>
    </div>
  );
}

export default Hero;
