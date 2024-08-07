import { FaGraduationCap } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { RiSchoolFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
function Education() {
    // pt-[10rem]
  return (
    <div id="education" className="w-full text-white pt-[5rem] sm:pt-0  sm:h[40vh] h-[90vh] bg-[#cbf] sm:h-[30vh]">

        
        <div className="text-center font-Rubik text-black font-bold text-4xl underline underline-offset-8 decoration-[#3916a3] decoration-solid decoration-4 py-4 ">
            Education
        </div>
        <div  className="flex my-5 flex-col gap-10 sm:flex-row ">
        <div className="bg-[#201737]  hover:scale-105 hover:duration-500 hover:ease-out  flex flex-col items-center justify-center mx-auto gap-6 w-[350px] rounded-lg h-[200px]">

        <div className="bg-[#201737]  flex items-center justify-center gap-6  " >
        <div className="text-3xl">
            <FaSchool/>
        </div>
        <div className="font-semibold text-lg">
            
            Secondary Education
            <br/>
            <span className=" text-sm font-normal">
                Atma Malik International School
            </span>
            <br/>
            <div className="flex items-center text-sm font-normal gap-2">

            <MdAccessTime/> <span className="">2019</span>
            </div>
        </div>
        </div>
        <div className=" font-Rubik font-semibold mr-[15rem]">
             72%
        </div>
        </div>
        <div className="bg-[#201737] hover:scale-105 hover:duration-500 hover:ease-out flex flex-col items-center justify-center mx-auto gap-6 w-[350px] rounded-lg h-[200px]">

        <div className="bg-[#201737] flex items-center justify-center gap-6 " >
        <div className="text-3xl">
            <RiSchoolFill/>
        </div>
        <div className="font-semibold text-lg">
            
            Higher secondary education
            <br/>
            <span className=" text-sm font-normal">
                Shri Sai Baba College, Shirdi
            </span>
            <br/>
            <div className="flex items-center text-sm font-normal gap-2">

            <MdAccessTime/> <span className="">2021</span>
            </div>
        </div>
        </div>
        <div className=" font-Rubik font-semibold mr-[15rem]">
             82%
        </div>
        </div>
        <div className="bg-[#201737] hover:scale-105 hover:duration-500 hover:ease-out flex flex-col items-center justify-center mx-auto gap-6 w-[350px] rounded-lg h-[200px]  ">

        <div className="bg-[#201737] flex my-5  items-center justify-center gap-5 " >
        <div className="text-3xl mx-2">
            <FaGraduationCap/>
        </div>
        <div className="font-semibold text-lg">
            Bachelor&apos;s degree in computer science
            <br/>
            <span className=" text-sm font-normal">Savitribai Phule University, Pune</span>
            <br/>
            <div className="flex items-center text-sm font-normal gap-2">

            <MdAccessTime/> <span className="">2021-2024</span>
            </div>
        </div>
        </div>
        <div className=" font-Rubik font-semibold  mr-20 mb-3">
            8.73 SGPA (80%)
        </div>
        </div>
        </div>
    </div>
  )
}

export default Education