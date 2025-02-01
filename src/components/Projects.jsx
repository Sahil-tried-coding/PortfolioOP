import React, { useEffect } from "react";
import Project_temp from "./Project_temp";
import data from "./Data";
import img from "../Assets/pics-2.png";
import img1 from "../Assets/elixer-op.png";
import img2 from "../Assets/xxx.png";
// import img2 from "../Assets/mumble.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    console.log("Registering title animation");
    gsap.from("#title", {
      x: 120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%", // when the top of the trigger hits 80% of the viewport height
        end: "top 20%", // when the top of the trigger hits 20% of the viewport height
        scrub: true,
        markers: true,
        yoyo: true,
      },
    });
  }, []);

  useEffect(() => {
    console.log("Registering more animation");
    gsap.from("#more", {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#more",
        start: "top 80%", // When to start the animation (80% from the top of the viewport)
        end: "top 20%", // When the top of the trigger hits 20% of the viewport height
        scrub: true, // Allows the animation to be tied to the scrollbar position
        markers: true,
      },
    });
  }, []);

  return (
    <div
      id="projects"
      className="bg-[#cbf] pb-20 w-full flex flex-col max-h-max"
    >
      <div
        id="title"
        className="font-Rubik text-center text-[#00000] font-bold text-4xl underline underline-offset-8 decoration-[#48199f] decoration-solid decoration-4 py-4"
      >
        Projects
      </div>
      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:gap-1 mt-10">
        <Project_temp
          url={data[0].url}
          github_url={data[0].url}
          under_title={data[0].under_title}
          title={data[0].title}
          img={img2}
          desc={data[0].desc}
          db={data[0].db}
        />
        <Project_temp
          url={data[1].url}
          github_url={data[1].url}
          under_title={data[1].under_title}
          title={data[1].title}
          img={img1}
          desc={data[1].desc}
          db={data[1].db}

        />
        <Project_temp
          url={data[2].url}
          github_url={data[2].url}
          under_title={data[2].under_title}
          title={data[2].title}
          img={img}
          desc={data[2].desc}
          db={data[2].db}
        />
      </div>
      <p
        id="more"
        className="font-poppins px-5 sm:pl-28 sm:pt-20 text-[#3b0088] text-3xl font-bold pt-16"
      >
        More Amazing, Aesthetic and creative Projects coming really Soon! :)
      </p>
    </div>
  );
}

export default Projects;
