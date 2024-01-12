import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import faqimg from '../assets/images/faq.png';
import { PrimaryHeading } from '../components/Text';
import Sechead from '../components/Sechead';


const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const toggleAnswerVisibility = () => {
    onToggle(index);
  };

  return (
    <div className={`faq-item my-5 ${isOpen ? 'open' : ''}`} data-aos={isOpen ? 'fade-up' : ''}>
      <h3 className="faq-question text-primary font-bold text-gray-600 text-xl">
      <FontAwesomeIcon className="icon cursor-pointer mr-4" icon={isOpen ? faCaretUp : faCaretDown}  onClick={toggleAnswerVisibility}/>
        {question} 
      </h3>
      {isOpen && <p className="faq-answer pl-6 text-gray-400" data-aos="fade-up">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-[#f8f9fa] py-10'>
    <div className='container py-10 md:py-20 mx-auto md:flex-nowrap flex-wrap gap-12 flex items-center justify-between'>


<div className='lg:w-[60%] w-[100%]'>
<Sechead text="FAQ" style={"lg:mx-[0px] mb-4"}/>
<PrimaryHeading style={"w-[100%] sm:w-[100%] pb-10"}  title={"Have any questions?"} />

      <FAQItem
        index={0}
        question="How can i contact you?"
        answer="You can contact me with the help of the given gmail and contact info"
        isOpen={openIndex === 0}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={1}
        question="How can i contact you?"
        answer="You can contact me with the help of the given gmail and contact info"
        isOpen={openIndex === 1}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={2}
        question="How can i contact you?"
        answer="You can contact me with the help of the given gmail and contact info"
        isOpen={openIndex === 2}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={3}
        question="How can i contact you?"
        answer="You can contact me with the help of the given gmail and contact info"
        isOpen={openIndex === 3}
        onToggle={handleToggle}
      />
      <hr className="" />
      <FAQItem
        index={4}
        question="How can i contact you?"
        answer="You can contact me with the help of the given gmail and contact info"
        isOpen={openIndex === 4}
        onToggle={handleToggle}
      />
      {/* Add more FAQ items as needed */}
</div>

<div className='flex justify-center mx-auto'>
    <img src={faqimg} className='mx-auto' />
</div>

    </div>
    </div>
  );
};

export default Faq;
