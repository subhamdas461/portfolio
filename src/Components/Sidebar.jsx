const toogleModeIcon ={
    dark : "fa-moon",
    light : "fa-sun"
}
const handleQuit=(e)=>{
    e.target.parentElement.classList.remove("side-active")
    e.target.parentElement.classList.add("collapse")
}

function Sidebar(props){
    let handleMode=()=>{
        props.mode === "dark"? props.changeTheme("light"): props.changeTheme("dark");
        
    }
    let light_sidebar = props.mode === "dark" ? "": "light-mode-sidebar"
    let light_icon = props.mode === "dark" ? "": "light-icon"
    return(
        <div className={`sidebar ${light_sidebar}`}>
            <i className={`icon fas fa-times ${light_icon}`} onClick={handleQuit}></i>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#project">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="dark-mode-btn" onClick={handleMode}>
                <i className={`fas ${props.mode === "dark"?toogleModeIcon.light:toogleModeIcon.dark}`}></i>
                <p>{props.mode==="dark"? "Light": "Dark"} Mode</p>
            </div>
        </div>
    )
}
export default Sidebar