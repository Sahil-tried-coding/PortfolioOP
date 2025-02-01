import { FaLocationDot } from "react-icons/fa6";
import resume from "../pdf/Resume-sahil.pdf"
// import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function AboutMe() {
  const handleDownloadResume = () => {
    const a = document.createElement("a");
    a.href = resume; // Use the imported PDF directly as href
    a.download = "Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  // pt-[6rem]
  // #171421
  return (
    <div
      id="about"
      className="  w-full h-[80vh] sm:pt-10 flex flex-col gap-8 items-center  sm:justify-center  bg-[#cbf]  "
    >
      <div className="font-Rubik font-bold text-4xl underline underline-offset-8 decoration-[#6919ba] decoration-solid decoration-4 ">
        About Me
      </div>
      <div
        id="box"
        className="bg-[#2A194C] text-white h-[410px]  p-3 w-[350px] md:h-[500px] md:flex md:flex-col md:justify-evenly rounded-md md:w-[600px]"
      >
        <div className="gap-10">
          <p className="text-lg md:text-2xl mt-4 md:mt-6  font-poppins font-bold">
            Name:{" "}
            <span className="font-medium  font-Inter"> Sahil Shaikh</span>{" "}
          </p>
          <p className="text-lg md:text-2xl mt-4 md:mt-6  font-poppins font-bold">
            Nationality:{" "}
            <span className="font-medium font-Inter"> Indian</span>{" "}
          </p>
          <p className="text-lg md:text-2xl mt-4 md:mt-6  font-poppins font-bold">
            Languages:{" "}
            <span className="font-medium font-Inter font-bold">
              {" "}
              English,Hindi,Marathi
            </span>{" "}
          </p>
        </div>
        <div className="mt-10 md:gap-10 ">
          <p className="text-lg my-3  md:text-2xl  items-center gap-3 flex">
            <FaLocationDot />
            <span className=" font-Rubik font-medium ">
              Shirdi,dist-AhemdNagar,
              <br /> 423109
            </span>
          </p>
          <p className="text-lg my-3 md:text-2xl  items-center gap-3 flex">
            <MdEmail />
            <span className=" font-Rubik font-medium ">
              Sahiltriedcoding@gmail.com
            </span>
          </p>
          
        </div>
        <button
          className=" font-semibold  md:w-[300px] md:h-[50px] cursor-pointer text-center mx-auto w-full mt-5 text-white  px-3 py-3 rounded-lg font-Rubik  bg-fuchsia-700  "
          onClick={handleDownloadResume}
        >
          Get Resume
        </button>
      </div>
    </div>
  );
}

export default AboutMe;

// <a href="https://drive.google.com/file/d/1b3Qsd0KnMk32hbyLmp8wj_NtixO-iVyd/view?pli=1">


{/* <p className="text-lg my-3 md:text-2xl  items-center gap-3 flex">
            <FaPhone />
            <span className=" font-Rubik font-medium ">
              +91 7972483330
            </span>
          </p> */}