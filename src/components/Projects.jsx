import Project_temp from "./Project_temp"
import data from "./Data"
import img from "../Assets/pics-2.png"
import img1 from "../Assets/elixer-op.png"
import gsap from "gsap/all"

import { useEffect } from "react"
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
function Projects() {

  useEffect(()=>{
    gsap.from("#title", {
      x: 120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        start: "top 80%", // when the top of the trigger hits 80% of the viewport height
        end: "bottom 20%", // when the bottom of the trigger hits 20% of the viewport height
        scrub: 2,
        markers: true,
        yoyo:true
      }
    })
  },[])


    
    //pt-[6rem]
  return (
    <div id="projects" className="bg-[#cbf] pb-20 w-full flex flex-col max-h-max">
        <div id="title" className="font-Rubik text-center  text-[#00000] font-bold text-4xl underline underline-offset-8 decoration-[#48199f] decoration-solid decoration-4 py-4 ">
            Projects
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-1 mt-10">
        <Project_temp url={data[0].url} under_title={data[0].under_title} title={data[0].title} img={img1} desc={data[0].desc}/>
        <Project_temp url={data[1].url} under_title={data[1].under_title} title={data[1].title} img={img} desc={data[1].desc}/>
        </div>
    </div>
  )
}

export default Projects