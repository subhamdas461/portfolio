import Sidebar from "./Components/Sidebar"
import Home from "./Components/Home"
import About from "./Components/About"
import Education from "./Components/Education"
import Navbar from "./Components/Navbar"
import Contact from "./Components/Contact"
import Project from "./Components/Project"
import Experience from "./Components/Experience"


// const sidebar = document.querySelector(".sidebar");
// const main_content = document.querySelector(".main-content")
// window.addEventListener('resize',(e)=>{
   
//     if(e.target.innerWidth < 700){
//         sidebar.classList.add("side-active")
//         main_content.classList.add("active-main")
//     }
// })
const App = (props) =>{
    return(
        <>
           <Sidebar/>
           <section className="main-content">
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