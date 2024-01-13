// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icons } from '../assets/icons/icons';

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check whether the button should be visible
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="hidden md:block scroll-to-top-btn bg-dark-primary" onClick={scrollToTop}>
        <FontAwesomeIcon icon={Icons.ArrowUp} className='ease-in-out duration-500 hover:-translate-y-1 cursor-pointer text-black text-2xl' />
        </button>
      )}
    </div>
  );
};

export default TopButton;
