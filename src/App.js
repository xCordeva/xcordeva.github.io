import { Element } from 'react-scroll';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <Element name="about" className="element">
        <About/>
      </Element>
      <Element name="skills" className="element">
        <Skills/>
      </Element>
      <Element name="projects" className="element">
        <Projects/>
      </Element>
      <Element name="education" className="element">
        <Education/>
      </Element>
      <Element name="contact" className="element">
        <Contact/>
      </Element>
      <Footer/>
    </div>
  );
}

export default App;