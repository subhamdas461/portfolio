import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education/Education";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Project from "./Components/Projects/Project";
import Experience from "./Components/Experience/Experience";
import { useState, useEffect, createContext } from "react";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills/Skills";

export const ThemeData = createContext();
const App = () => {
    const [mode, setMode] = useState(
        localStorage.mode ? localStorage.mode : "dark"
    );

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        localStorage.setItem("mode", mode);
        localStorage.mode === "dark" ? setMode("dark") : setMode("light");
    }, [mode]);

    useEffect(() => {
        let loadEle = document.querySelector(".main-loader");
        let loadTimeOne = setTimeout(() => {
            setLoading(false);
            loadEle.classList.add("hide-loader");
            setTimeout(() => {
                loadEle.remove();
            }, 100);
        }, 500);
        return () => {
            clearTimeout(loadTimeOne);
        };
    }, [loading]);

    let light_section = mode === "dark" ? "" : "light-mode-section";
    return (
        !loading && (
            <>
                <ThemeData.Provider value={mode}>
                    <Sidebar mode={mode} changeTheme={setMode} />
                    <section
                        className={`main-content ${
                            window.innerWidth < 700 ? "active-main" : ""
                        } ${light_section}`}
                    >
                        <Navbar mode={mode} />
                        <Home />
                        <About />
                        <Education mode={mode} />
                        <Skills />
                        <Experience mode={mode} />
                        <Project />
                        <Contact mode={mode} />
                        <Footer />
                    </section>
                </ThemeData.Provider>
            </>
        )
    );
};
export default App;
