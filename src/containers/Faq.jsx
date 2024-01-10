import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import faqimg from '../assets/images/faq.png';
import { PrimaryHeading } from '../components/Text';

const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const toggleAnswerVisibility = () => {
    onToggle(index);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} data-aos={isOpen ? 'fade-up' : ''}>
      <h3 className="faq-question text-primary">
      <FontAwesomeIcon className="icon cursor-pointer mr-4" icon={isOpen ? faCaretUp : faCaretDown}  onClick={toggleAnswerVisibility}/>
        {question} 
      </h3>
      {isOpen && <p className="faq-answer pl-6" data-aos="fade-up">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='container my-20 flex items-center justify-between'>


<div>
<PrimaryHeading style={"w-[100%]"}  title={"Have any questions?"} />

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


<div>
    <img src={faqimg}/>
</div>

    </div>
  );
};

export default Faq;
