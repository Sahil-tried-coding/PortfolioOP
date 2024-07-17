import { createContext } from "react";
import img from "../Assets/pics-2.png"
import img1 from "../Assets/Elixer-page.png"
import react from "../Assets/react.png"
import tailwind from "../Assets/tailwind.png"



export const MyContext =createContext()


const MyContextProvider = ({children}) =>{
     
    const data = [
    {
        title:"Trippy ",
        under_title:"Tours and Travels ",
        desc:"Embark on a journey beyond imagination with Trippy, your ultimate guide to exploring the world. Dive into a universe of adventures, curated just for you, where every trip is a unique voyage waiting to unfold.",
        src:{img},
        skill_react:{react},
        skill_tailwind:{tailwind}
    },
    {
        title:"Elixer",
        under_title:"Food Delivery",
        desc:"Elixer is an innovative food delivery app designed with a focus on providing a seamless and delightful user experience. The app's front-end is developed to offer intuitive navigation, visually appealing design, and interactive features, making it easy for users to explore and order from a diverse range of menus.",
        src:img1,
        react:{react},
        tailwind:{tailwind}
    }]

   

    return(
        <MyContext.Provider value={data}>
            {children}
        </MyContext.Provider>
    )


}
export default MyContextProvider