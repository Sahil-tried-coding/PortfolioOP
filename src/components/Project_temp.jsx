// import { HiOutlineRocketLaunch } from "react-icons/hi2";
import gif from "../Assets/launch-unscreen.gif";
import { FaGithub } from "react-icons/fa";
import react from "../Assets/react.png"
import tailwind from "../Assets/tailwind.png"
// import value from "./value"
function Project_temp({title, under_title, desc, img,url}) {


  return (
    <div className="sm:hover:scale-105 sm:hover:duration-700 w-11/12 max-h-max shadow-xl shadow-black text-white  bg-[#201737] mx-auto sm:w-[30%] mt-10">
      <img src={img} className=" w-[100%] mx-auto h-[276px] bg-white p-3"></img>
      <div className="flex my-2 p-1 items-center justify-between">
        <div className="flex flex-col px-3">
          <h1 className="font-semibold text-2xl font-Inter">{title}</h1>
          <h1 className="font-semibold text-blue-500 text-lg font-poppins">
            {under_title}
          </h1>
          
          
        </div>
        <span className="  -mt-8 flex items-center gap-3 text-3xl font-bold ">
          <a href="https://github.com/Sahil-tried-coding/Tours-and-Travels">
            <FaGithub />
          </a>
          <a href={url}>
            <img src={gif} alt="Live Here" className="  h-10 bg-inherit" />
          </a>
        </span>
      </div>
      <div className="flex justify-start px-3 gap-4 items-center py-2">
        <div>
          Responsive ✅
        </div>
          <img className=" border-0  border-white p-1 w-10 h-10  " src={react}/>
          <img className=" border-0  border-white p-1 w-10 h-10 " src={tailwind}/>
          </div><hr/>
      <div className="p-2 py-5 text-sm font-medium font-Rubik">{desc}</div>
      
      
    </div>
  );
}

export default Project_temp;

// <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
// <img className="rounded-lg mb-4" src={img} alt="Elixer app screenshot"/>
// <h2 className="text-2xl font-bold mb-2">Elixer</h2>
// <p className="text-blue-500 mb-4">Food Delivery</p>
// <p className="text-gray-700 mb-4">Elixer is an innovative food delivery app designed with a focus on providing a seamless and delightful user experience. The app's front-end is developed to offer intuitive navigation, visually appealing design, and interactive features, making it easy for users to explore and order from a diverse range of options.</p>
// <div className="flex items-center mb-4">
//   <a href="your-github-url" className="mr-4">
//     < FaGithub className="h-6 w-6"/>
//   </a>
//   <img src={gif} alt="Rocket" className="h-6 w-6"/>

// <a href="your-menu-url" className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition duration-300">View Menu</a>

//       {/* <div className=" w-full gap-5 flex">
//         <button className="bg-green-600 p-2 rounded-2xl items-center gap-2 border-4 border-black text-white flex text-xl"><FaGithub/>Source Code</button>
//         <button className="bg-blue-600 p-2 rounded-2xl items-center gap-2 border-4 border-black text-white flex text-xl"><HiOutlineRocketLaunch/>Live Here</button>
//       </div> */}
//       </div>
