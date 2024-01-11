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
function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
       <Hire />
    <Faq />
     <Service />
      <Resume />
      <TestimonialSlider /> 
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
