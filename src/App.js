import React, { useEffect } from "react";
import "./App.css";
import Hero from "../src/containers/Hero";
import Service from "./containers/Service";
import About from "./containers/About";
import Resume from "./containers/Resume";
import Skills from "./containers/Skills";
import Hire from "./containers/Hire";
import Faq from "./containers/Faq";
import TestimonialSlider from "./containers/TestimonialSlider";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Works from "./containers/Works";
import Navbar from "./containers/Navbar";
import TopButton from "./components/TopButton";
import Upwork from "./containers/Upwork";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration in milliseconds
      offset: 120, // offset (in px) from the original trigger point
      easing: "ease-in-out", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []); // useEffect runs only once after component mount

  return (
    <div>
      <TopButton />
      <Hero />
      <Navbar />
      <About />
      <Service />
      <Resume />
      <Skills />
      <Upwork />
      <Works />
      <TestimonialSlider />
      <Hire />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
