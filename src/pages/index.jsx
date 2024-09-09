import Projects from "../components/section/Projects";
import About from "../components/section/About";
import Contact from "../components/section/Contacto";
import Education from "../components/section/Trayectoria";
import Skills from "../components/section/Skills";

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
