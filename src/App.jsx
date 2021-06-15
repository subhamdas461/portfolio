import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education/Education";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills/Skills";

const App = () => {
  const [mode, setMode] = useState(
    localStorage.mode ? localStorage.mode : "dark"
  );
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    localStorage.setItem("mode", mode);
    localStorage.mode === "dark" ? setMode("dark") : setMode("light");
  }, [mode])
  
  useEffect(() => {
    let loadEle = document.querySelector(".main-loader");
    let loadTimeOne = setTimeout(()=>{
        setLoading(false)
        loadEle.classList.add("hide-loader")
        console.log("loadanim",loading);
        setTimeout(()=>{
          console.log("remove load",loading);
           loadEle.remove()
        },1000)
    },1000)
    
    return ()=>{
        clearTimeout(loadTimeOne)
    }
  }, []);

  let light_section = mode === "dark" ? "" : "light-mode-section";
  return (
      !loading &&
    <>
      <Sidebar mode={mode} changeTheme={setMode} />
      <section
        className={`main-content ${
          window.innerWidth < 700 ? "active-main" : ""
        } ${light_section}`}
      >
        <Navbar mode={mode} />
        <Home />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Project />
        <Contact mode={mode} />
        <Footer />
      </section>
    </>
  );
};
export default App;
