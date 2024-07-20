import { ReactTyped } from "react-typed";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import hello from "../Assets/hello.gif"
function Home() {
   
  return (
    <div id="home"  className="  w-full h-[90vh] pt-20 flex-col flex items-center justify-center bg-[#cbf] ">
        <div   className="flex flex-col gap-5 px-8  pt-28 sm:pt-[12rem] justify-center items-center max-w-[1000px] mx-auto ">
        
            <p className=" -mt-[7rem] sm:mb-2 md:text-bold text-black font-Rubik text-xl md:text2xl">
                Hello👋 I am
             </p>
                <br/>
                <span className="text-3xl md:text-3xl -mt-8 sm: md:-mt-2 font-bold  font-Inter text-black">
                <ReactTyped
          strings={[
              "Sahil Shaikh","Full stack web dev"
            ]}
            typeSpeed={100}
            backDelay={40}
            loop
            />
        </span> 
            <div className="font-bold text-md mt-12 md:text-2xl text-[#6919ba] font-Inter">
            
            As an ambitious full-stack web developer, I am deeply passionate about revolutionizing the digital landscape with intuitive and engaging user interfaces..In the ever-evolving realm of technology
            
            </div>
            <div className="flex md:text-5xl flex-row text-3xl mt-10 gap-4">
            <a href="https://www.linkedin.com/in/me/"><FaLinkedin/></a>
            <a href="https://github.com/Sahil-tried-coding"><FaGithub/></a>
            <a href="https://x.com/Sahil18_11"><FaSquareXTwitter/></a>
            </div>
            <div className="flex text-4xl animate-bounce mt-10">
            <FaArrowDown/>
            </div>
        </div>
    </div>
  )
}

export default Home
