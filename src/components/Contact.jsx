import { BsFillArrowUpSquareFill } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {Link} from "react-router-dom"
import { FaArrowDown } from "react-icons/fa";
function Contact() {
  // pt-[10.5rem]
  return (
    <div id="contact" className="#contact pt-[20rem]    w-[100vw] sm:h-[100vh] h-[103vh] bg-[#cbf]">
      <div className="sm:text-4xl mb-5 text-center font-Rubik text-[#00000] font-bold text-2xl underline underline-offset-8 decoration-[#ffffff] decoration-solid decoration-4 py-4">
        Get in Touch with me!
      </div>
      <div className="sm:text-2xl font-semibold g text-center">Talk to me.</div>
      <div className="flex gap-3  text-Rubik font-Inter  font-semibold text-lg text-white flex-col items-center justify-center sm:flex-row">

        <div className="bg-[#201737] sm:w-[300px] sm:mt-6 sm:mr-2 rounded-xl h-[170px] flex  flex-col items-center justify-center w-[80%] hover:scale-105 duration-500 ease-in">
          <div className="flex items-center gap-2 my-2"><MdOutlineEmail /><span> E-mail </span><FaArrowDown className="animate-bounce"/></div>
          <div className="font-normal text-xs my-2">sahiltriedcoding@gmail.com</div>
          <div ><a className="flex py-3 gap-2 items-center" href="mailto:sahiltriedcoding@gmail.com">Mail me <FaArrowRight className=" animate-pulse" /></a></div>
        </div>
       
      </div>

       <div className="flex justify-center md:text-5xl mt-8 flex-row text-3xl  gap-4">
        <a className="hover:scale-125" href="https://www.linkedin.com/in/me/"><FaLinkedin/></a>
        <a className="hover:scale-125" href="mailto:sahiltriedcoding@gmail.com"><MdEmail/></a>
        <a className="hover:scale-125" href="https://github.com/Sahil-tried-coding"><FaGithub/></a>
        <a className="hover:scale-125" href="https://www.instagram.com/who_sahilshaikh/"><FaInstagram/></a>
        <a className="hover:scale-125" href="https://x.com/Sahil18_11"><FaSquareXTwitter/></a>
      </div>
      <Link onClick={() => scroll.scrollToTop()}><BsFillArrowUpSquareFill className="ml-[12.5rem] animate-bounce sm:ml-[43rem] mr-[5rem]  mt-14 text-center text-4xl"/></Link> 
    </div>
  );
}

export default Contact;



// https://web.whatsapp.com/send/?phone=9359670045&text=hello

        // <div className=" hover:scale-105 duration-500 ease-in bg-purple-700 sm:w-[300px] sm:mt-6  rounded-xl h-[170px] flex  flex-col items-center justify-center w-[70%]">
        //   <div className="flex items-center gap-2 my-2"><BsWhatsapp /><span> Whatsapp </span><FaArrowDown className="animate-bounce"/></div>
        //   <div className="font-normal text-xs my-2">+91 7972483330</div>
        //   <div ><a className="flex py-3 gap-2 items-center" href="https://web.whatsapp.com/send/?phone=7972483330&text=hello">Text me <FaArrowRight className=" animate-pulse" /></a></div>
        // </div>