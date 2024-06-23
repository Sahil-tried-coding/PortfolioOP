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
function Contact() {
  return (
    <div id="contact" className="#contact pt-[10.5rem] w-100 h-[100vh] bg-[#cbf]">
      <div className="sm:text-4xl text-center font-Rubik text-[#00000] font-bold text-2xl underline underline-offset-8 decoration-[#ffffff] decoration-solid decoration-4 py-4">
        Get in Touch with me!
      </div>
      <div className="sm:text-2xl font-semibold g text-center">Talk to me.</div>
      <div className="flex gap-3  text-Rubik font-Inter  font-semibold text-lg text-white flex-col items-center justify-center sm:flex-row">
        <div className="bg-purple-700 mt-3 sm:w-[300px] sm:gap-0 gap-1 flex flex-col items-center justify-center rounded-lg  w-[70%] h-[160px]">
          <MdOutlineEmail />
          <span>E-mail</span>
          <br />
          <span className="font-normal text-xs">
            sahiltriedcoding@gmail.com
          </span>
          <br />
          <span className="flex items-center gap-2">
            <a
              className="flex items-center gap-2"
              href="mailto:sahiltriedcoding@gmail.com"
            >
              Mail me <FaArrowRight />
            </a>
          </span>
        </div>
        <div className="bg-purple-700 sm:w-[300px] sm:gap-0 gap-1 flex flex-col items-center justify-center rounded-lg  w-[70%] h-[160px]">
          <BsWhatsapp />
          <span>Whatsapp</span>
          <br />
          <span className="font-normal text-xs">+91 7972483330</span>
          <br />
          <span className="flex items-center gap-2">
            <a
              className="flex items-center gap-2"
              href="https://web.whatsapp.com/send/?phone=9359670045&text=hello"
            >
              Text me
              <FaArrowRight />
            </a>
          </span>
        </div>
      </div>

       <div className="flex justify-center md:text-5xl mt-8 flex-row text-3xl  gap-4">
        <a className="hover:scale-125" href="https://www.linkedin.com/in/me/"><FaLinkedin/></a>
        <a className="hover:scale-125" href="mailto:sahiltriedcoding@gmail.com"><MdEmail/></a>
        <a className="hover:scale-125" href="https://github.com/Sahil-tried-coding"><FaGithub/></a>
        <a className="hover:scale-125" href="https://www.instagram.com/who_sahilshaikh/"><FaInstagram/></a>
        <a className="hover:scale-125" href="https://x.com/Sahil18_11"><FaSquareXTwitter/></a>
      </div>
      <Link onClick={() => scroll.scrollToTop()}><BsFillArrowUpSquareFill className="ml-[12rem] animate-bounce sm:ml-[47rem]  my-14 text-right text-4xl"/></Link> 
    </div>
  );
}

export default Contact;



// https://web.whatsapp.com/send/?phone=9359670045&text=hello
