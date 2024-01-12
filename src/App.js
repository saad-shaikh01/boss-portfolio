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

function App() {
  return (
    <div>
      <Hero />
      <Navbar />
      <About />
      <Service />
      <Resume />
      <Skills />
      <Works />
      <Hire />
      <Faq />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
