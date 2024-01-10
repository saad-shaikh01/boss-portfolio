import './App.css';
import Hero from '../src/containers/Hero';
import Service from './containers/Service';
import About from './containers/About'
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Hire from './containers/Hire';
import Faq from './containers/Faq';
function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Hire/>
      <Faq/>
      {/* <Service/> */}
      {/* <Resume /> */}
    </div>
  );
}

export default App;
