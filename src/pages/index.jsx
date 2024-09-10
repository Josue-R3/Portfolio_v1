import About from '../components/section/About'
import Skills from "../components/section/Skills";
import Projects from '../components/section/Projects'  
import Education from "../components/section/Trayectoria";
import Contact from "../components/section/Contacto";

export default function Portfolio() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
