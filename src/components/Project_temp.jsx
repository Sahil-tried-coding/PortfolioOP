import { HiOutlineRocketLaunch } 
from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import data from "./Data"
function Project_temp() {






  return (
    <div className="hover:scale-105 hover:duration-500 w-11/12 max-h-max shadow-xl shadow-black text-black  bg-white mx-auto sm:w-[30%] mt-10">
        <img src={data[0].src} className=" w-[100%] mx-auto h-[276px] bg-black">

        </img>
        <div className="flex my-2 p-1 items-center justify-between">
            <h1 className="font-bold text-2xl font-poppins">{data[0].title}</h1>
            <span className="   flex items-center gap-3 text-3xl font-bold "><a href="https://github.com/Sahil-tried-coding/Tours-and-Travels"><FaGithub/></a><a href="https://tours-and-travels-stc.vercel.app/"><HiOutlineRocketLaunch/></a></span>
  
        </div>
        <div className="p-2 font-semibold font-Rubik">{data[0].desc}</div>
        {/* <div className=" w-full gap-5 flex">
          <button className="bg-green-600 p-2 rounded-2xl items-center gap-2 border-4 border-black text-white flex text-xl"><FaGithub/>Source Code</button>
          <button className="bg-blue-600 p-2 rounded-2xl items-center gap-2 border-4 border-black text-white flex text-xl"><HiOutlineRocketLaunch/>Live Here</button>
        </div> */}
    </div>
  )
}

export default Project_temp