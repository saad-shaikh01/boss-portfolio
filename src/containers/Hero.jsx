import React from 'react';
import videoSrc from '../videos/Header-video.mp4';

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
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-white text-center'>
          <h1 className='text-4xl font-bold mb-4'>Your Title Here</h1>
          <p className='text-lg'>Your content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
