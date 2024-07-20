import logo from "../Assets/sahilshaikhlogo.png";
import { MdHome } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { FaTools } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegHardDrive } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-scroll";
import { IoIosContact } from "react-icons/io";
import gsap from "gsap/all";
function Navbar() {
  const [nav, setnav] = useState(false);
  const [sideBar,setSideBar]= useState(false);


  // useEffect(()=>{
  //   gsap.from("#sidebar",{
  //     x:120,
      
  //   })
  // },[])
  function changeHandler() {
    // setnav(!nav);
    setSideBar(!sideBar)
  }
  const headers = [
    {
      title: "Home",
      url: "/",
      icon: <MdHome />,
    },
    {
      title: "About",
      url: "#about",
      icon: <IoPersonSharp />,
    },
    {
      title: "Skills",
      url: "#skills",
      icon: <FaTools />,
    },
    {
      title: "Projects",
      url: "#projects",
      icon: <FaRegHardDrive />,
    },
    {
      title: "Education",
      url: "#education",
      icon: <FaGraduationCap />,
    },
    {
      title:"Contact",
      url:"#contact",
      icon:<IoIosContact/>
    }
  ];
  return (
    // absolute top- right-0 -top-[10rem]
      <nav className="">
        {
          sideBar && (<div id="sidebar" className="  fixed overflow-y-scroll sm:hidden h-full  w-[100%] ">
          <ul className="text-black -mb-[24.5rem]  ml-[15rem]  backdrop-blur-3xl h-[60%]   flex flex-col justify-center w-[40%] text-xl gap-4 items-center ">
            
              {headers.map((items) => {
                return (
                  <li 
                  
                    onClick={changeHandler}
                    className="flex font-semibold items-center gap-3 my-3"
                    key={items.title}
                  >
                    {items.icon}{" "}
                    <a href={items.url} >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>)
        }
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="fixed  bg-black w-full h-[80px]  flex justify-between items-center px-1  "
        >
          <div>
            <Link  onClick={() => scroll.scrollToTop()}>
              <img
                src={logo}
                className="  md:left-4  object-cover  h-[300px]"
              />
            </Link>
          </div>
          <ul className="text-[#AC49FF] md:mr-5 hidden md:flex md:gap-5 md:font-bold md:text-xl ">
            {headers.map((item) => {
              return (
                <a href={item.url}
                  key={item.title}
                  className="flex hover:underline hover:decoration-white hover:decoration-2 items-center gap-2"
                >
                  {item.icon} <a href={item.url}>{item.title}</a>
                </a>
              );
            })}
          </ul>
          <div className="md:hidden z-10" onClick={changeHandler}>
          {sideBar ? (
            <LiaTimesSolid className="text-white text-2xl" />
          ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </div>
          {/* for mobile */}
          {/* {nav && (
            
          )} */}
        </div>
        {/* <div className="w-full"></div> */}
      </nav>
  );
}

export default Navbar;

{/* <ul className="text-[#AC49FF] absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center">
              {headers.map((items) => {
                return (
                  <li 
                  
                    onClick={changeHandler}
                    className="flex items-center gap-3 my-3"
                    key={items.title}
                  >
                    {items.icon}{" "}
                    <a href={items.url} >
                      {items.title}
                    </a>
                  </li>
                );
              })}
            </ul> */}