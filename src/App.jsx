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
      <div>
      <Navbar />
        
      </div>
      <div>
      <Home />

      </div>
      <div>
      <AboutMe />

      </div>
      <div>
      <Projects />

      </div>
      <div>
      <Skills />

      </div>
      <div>

      <Education />
      </div>
      <div>

      <Contact />
      </div>
    </div>
  );
}

export default App;
