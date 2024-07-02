import java from "../Assets/javaop.png"
import css from "../Assets/css.png"
import html from "../Assets/html.png"
import javascript from "../Assets/javascript.png"
import react from "../Assets/react.png"
import tailwind from "../Assets/tailwind.png"
import github from "../Assets/github.png"
import gsap from "../Assets/Picsart_24-07-01_23-47-17-364.png"
function Skills() {
    let skills =[
        {   src:html,
            title:"HTML"
        },
        {   src:css,
            title:"CSS"
        },
        {   src:javascript,
            title:"Javascript"
        },
        {   src:react,
            title:"React"
        },
        {   src:tailwind,
            title:"Tailwind"
        },
        {   src:java,
            title:"Java"
        },
        {   src:github,
            title:"Github"
        }
    ]
  return (
    // pt-[9rem]
    <div className="w-full h-screen  sm:pt[15rem] bg-[#cbf]" id="skills">
         <div className="max-w-[1000px] flex flex-col  justify-center p-4 w-full h-full">
            <div className="font-Rubik text-[#000] font-bold text-4xl underline underline-offset-8 decoration-[#ffffff] decoration-solid decoration-4 ">
                 Skills
            </div>
               <div className="grid w-[20rem]  grid-cols-2 justify-center items-center sm:mx-44 sm:grid-cols-3 sm:justify-center sm:items-center sm:w-full py-10 gap-4 text-center">
          {
                skills.map((data)=>{
                   return <div className=" bg-black shadow-md border-4 border-white   shadow-purple-600 flex flex-col justify-between" key={data.title}>
                        <img className="w-[100px] mx-auto mt-5 hover:scale-125 duration-500  " src={data.src}/>
                        <p className="text-white   font-Inter my-4 font-bold">{data.title}</p>
                    </div>
                })
            }
        </div>
        </div>

    </div>
  )
}

export default Skills

// 

//   return (
//     <div name="skills" className="w-full bg-[#0a192f] text-gray-300">
//       {/* Container */}
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         <div>
//           <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
//             Skills
//           </p>
//           <p className="py-4"> These are the technologies I've worked with</p>
//         </div>
//         <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-5 text-center py-10">
//           {skillArr.map((ele) => (
//             <div
//               key={ele.name}
//                ">
//               <img
//                 alt="work"
//                 className="w-14 mx-auto hover:scale-125 duration-500"
//                 src={ele.src}
//               />
//               <p className="my-4">{ele.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;


//<div className="#skills w-full skills h-[100vh]  bg-[#260e6e] ">
    // <div className="max-w-[1000px] flex flex-col p-4 w-full h-full">
    //     <div className="font-Rubik text-[#cbf] font-bold text-4xl underline underline-offset-8 decoration-[#ffffff] decoration-solid decoration-4 ">
    //         Skills
    //     </div>
    //     <div className="grid grid-cols-2  sm:mx-44 sm:grid-cols-3 sm:justify-center sm:items-center sm:w-full py-10 gap-4 text-center">
    //         {
    //             skills.map((data)=>{
    //                return <div className="shadow-md  shadow-black flex flex-col justify-between" key={data.title}>
    //                     <img className="w-[100px] mx-auto hover:scale-125 duration-500  " src={data.src}/>
    //                     <p className="text-white   font-Inter my-4 font-bold">{data.title}</p>
    //                 </div>
    //             })
    //         }
    //     </div>

    // </div>

    // </div>