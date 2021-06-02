import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Education"
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import Project from "./Components/Project"
import Experience from "./Components/Experience"
import { useState } from "react"
import Footer from "./Components/Footer"

const App = () =>{
    const [mode, setMode] = useState("dark");
    // const sidebar = document.querySelector(".sidebar");
    // const sidebar_text = document.querySelectorAll(".sidebar a");
    // const icons = document.querySelectorAll(".icon");
    // const navbar = document.querySelector(".navbar");
    // const section = document.querySelector("section");
    
    // if(sidebar != null){
    //     if(mode === "dark"){
    //         sidebar.classList.remove("light-mode-sidebar")
    //         navbar.classList.remove("light-mode-navbar")
    //         section.classList.remove("light-mode-section")
    //         icons.forEach(e=> e.classList.remove("light-icon"))
    //     }
    //     else{
    //         navbar.classList.add("light-mode-navbar")
    //         section.classList.add("light-mode-section")
    //         sidebar.classList.add("light-mode-sidebar")
    //         icons.forEach(e=> e.classList.add("light-icon"))
    //     }

    // }

    // useEffect(() => {
    // }, [])
    let light_section = mode === "dark" ? "": "light-mode-section"
    return(
        <>
           <Sidebar mode={mode}  changeTheme={setMode}/>
           <section className={`main-content ${window.innerWidth<700 ? "active-main": ""} ${light_section}`}>
                <Navbar mode={mode}/>
                <Home/>
                <About/>
                <Education/>
                <Experience/>
                <Project/>
                <Contact/>
                <Footer/>
           </section>
        </>
        
    )
}
export default App;