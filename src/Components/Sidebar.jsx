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
        props.mode == "dark"? props.changeTheme("light"): props.changeTheme("dark");
        
    }
    return(
        <div className="sidebar">
            <i className="fas fa-times" onClick={handleQuit}></i>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="#project">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div className="dark-mode-btn" onClick={handleMode}>
                <i className={`fas ${toogleModeIcon.light}`}></i>
                <p>Light Mode</p>
            </div>
        </div>
    )
}
export default Sidebar