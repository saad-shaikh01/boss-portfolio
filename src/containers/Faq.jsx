import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import faqimg from "../assets/images/faq.png";
import { PrimaryHeading } from "../components/Text";
import Sechead from "../components/Sechead";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ index, question, answer, isOpen, onToggle }) => {
  const toggleAnswerVisibility = () => {
    onToggle(index);
  };
  useEffect(() => {
    gsap.utils.toArray(".faq-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "+=200",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div
      className={`faq-item my-5 ${isOpen ? "open" : ""}`}
      data-aos={isOpen ? "fade-up" : ""}
    >
      <h3 className="faq-question text-primary font-bold text-gray-600 text-xl">
        <FontAwesomeIcon
          className="icon cursor-pointer mr-4"
          icon={isOpen ? faCaretUp : faCaretDown}
          onClick={toggleAnswerVisibility}
        />
        {question}
      </h3>
      {isOpen && (
        <p className="faq-answer pl-6 text-gray-400" data-aos="fade-up">
          {answer}
        </p>
      )}
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".faq-item").forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: -150,
        x: -100,
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "+=200",
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(item, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "+=200",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return (
    <div className='bg-[#f8f9fa] py-10'>
    <div className='container py-10 md:py-20 mx-auto md:flex-nowrap flex-wrap gap-12 flex items-center justify-between'>


<div className='lg:w-[60%] w-[100%]'>
<Sechead text="FAQ" style={"xl:mx-[0px] lg:mx-[0px] mb-4"}/>
<PrimaryHeading style={"w-[100%] sm:w-[100%] pb-10"}  title={"Have any questions?"} />

          <FAQItem
            index={0}
            question="What certifications does Muhammad Ahsan Akram hold?"
            answer="Muhammad Ahsan Akram holds certifications in project management, agile methodologies (Scrum), and technology strategy."
            isOpen={openIndex === 0}
            onToggle={handleToggle}
          />
          <hr className="" />
          <FAQItem
            index={1}
            question="Has Muhammad Ahsan Akram worked with international clients?"
            answer="Yes, Muhammad Ahsan Akram has experience working with international clients across different continents, including North America, Europe, and Asia."
            isOpen={openIndex === 1}
            onToggle={handleToggle}
          />
          <hr className="" />
          <FAQItem
            index={2}
            question="What is Muhammad Ahsan Akram's approach to problem-solving?"
            answer="Muhammad Ahsan Akram believes in a structured approach to problem-solving. He analyzes the situation, gathers relevant data, identifies potential solutions, and collaborates with stakeholders to make informed decisions."
            isOpen={openIndex === 2}
            onToggle={handleToggle}
          />
          <hr className="" />
          <FAQItem
            index={3}
            question="Can Muhammad Ahsan Akram provide references or testimonials from previous clients?"
            answer="Yes, Muhammad Ahsan Akram can provide references or testimonials upon request, showcasing positive feedback and recommendations from previous clients."
            isOpen={openIndex === 3}
            onToggle={handleToggle}
          />
          <hr className="" />
          <FAQItem
            index={4}
            question="How does Muhammad Ahsan Akram ensure effective communication with project stakeholders?"
            answer="Muhammad Ahsan Akram believes in regular and transparent communication with stakeholders. He conducts frequent project status updates, shares progress reports, and holds meetings to address any concerns or questions."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />
             <hr className="" />
          <FAQItem
            index={5}
            question="Can Muhammad Ahsan Akram provide insights on emerging technologies such as AI and blockchain?"
            answer="Yes, Muhammad Ahsan Akram keeps himself updated on emerging technologies and can provide insights on their potential applications, benefits, and challenges based on his industry experience and research."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />

<hr className="" />
          <FAQItem
            index={6}
            question="How does Muhammad Ahsan Akram ensure project deadlines are met?"
            answer="Muhammad Ahsan Akram employs effective project management techniques, such as setting realistic timelines, monitoring progress regularly, identifying potential risks, and implementing mitigation strategies to ensure project deadlines are met."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />

<hr className="" />
          <FAQItem
            index={7}
            question="What is Muhammad Ahsan Akram's philosophy on continuous learning and professional growth?"
            answer="Muhammad Ahsan Akram believes in lifelong learning and actively seeks opportunities to enhance his skills and knowledge through attending workshops, participating in industry forums, and pursuing relevant certifications."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />

<hr className="" />
          <FAQItem
            index={8}
            question="How does Muhammad Ahsan Akram handle change management in projects?"
            answer="Muhammad Ahsan Akram understands the importance of change management in projects. He employs a structured approach, involving stakeholders, communicating the benefits, managing resistance, and providing necessary training and support during the transition."
            isOpen={openIndex === 4}
            onToggle={handleToggle}
          />
          {/* Add more FAQ items as needed */}
        </div>

        <div className="flex justify-center mx-auto">
          <img src={faqimg} className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
