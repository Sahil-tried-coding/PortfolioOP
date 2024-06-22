import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { useEffect } from "react";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" w-full h-screen  ">
      {/* <Navbar/> */}
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
