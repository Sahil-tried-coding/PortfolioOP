import vid from "../Assets/Nahi matlab aisa bilkul immediate nahi soche hain but sochenge mirzapur 2 meme template munna bhaiya.mp4"
import {useState} from "react"
function Projects() {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
      setShowVideo(true); 
    };
  return (
    <div id="projects" className="bg-[#cbf] pt-[6rem] w-full h-screen">
        <div className="font-Rubik text-[#00000] font-bold text-4xl underline underline-offset-8 decoration-[#ffffff] decoration-solid decoration-4 py-4 ">
            Projects
        </div>
        <button onClick={handleClick} className="bg-white text-black font-semibold py-2 px-4 my-6 rounded-lg">
            Click Here
        </button>
        {
            showVideo && 
            <video src={vid} className="sm:w-[400px] sm:h-[250px]" autoPlay />
            
        }
        
    </div>
  )
}

export default Projects