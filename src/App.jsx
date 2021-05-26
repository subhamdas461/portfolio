import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Education"
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import Project from "./Components/Project"
import Experience from "./Components/Experience"
import { useEffect,useState } from "react"




const App = () =>{
    const [mode, setMode] = useState("dark");
    const sidebar = document.querySelector(".sidebar");
    const main_content = document.querySelector(".main-content")
    if(sidebar != null)
    mode === "dark" ? sidebar.classList.remove("light-mode-sidebar") : sidebar.classList.add("light-mode-sidebar")
    
    // useEffect(() => {
    //     const dark_btn = document.querySelector(".dark-mode-btn")
    //     console.log(mode);
    // }, [])
    return(
        <>
           <Sidebar mode={mode}  changeTheme={setMode}/>
           <section className="main-content " mode={mode}>
                <Navbar/>
                <Home/>
                <About/>
                <Education/>
                <Experience/>
                <Project/>
                <Contact/>
           </section>
        </>
        
    )
}
export default App;