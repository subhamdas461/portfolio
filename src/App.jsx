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
import Skills from "./Components/Skills/Skills"

const App = () =>{
    const [mode, setMode] = useState("dark");
    
    let light_section = mode === "dark" ? "": "light-mode-section"
    return(
        <>
            
           <Sidebar mode={mode}  changeTheme={setMode}/>
           <section className={`main-content ${window.innerWidth<700 ? "active-main": ""} ${light_section}`}>
                <Navbar mode={mode}/>
                <Home/>
                <About/>
                <Education/>
                <Skills/>
                <Experience/>
                <Project/>
                <Contact mode={mode}/>
                <Footer/>
               
           </section>
           
        </>
        
    )
}
export default App;

