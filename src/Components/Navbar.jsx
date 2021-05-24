import { useEffect } from "react";


 
const handleToggle = (item)=>{
    const sidebar = document.querySelector(".sidebar");
    const main_content = document.querySelector(".main-content")
    // window.addEventListener("resize",(e)=>{
        //     console.log(e.target.innerWidth);
        // })
        if(window.innerWidth>699){
            sidebar.classList.toggle("collapse");
            main_content.classList.toggle("active-main")
            // sidebar.classList.remove("side-active")
        }
        else{
            
            sidebar.classList.toggle("collapse")
            main_content.classList.remove("active-main")
            // sidebar.classList.toggle("side-active")
            
        }
}

function Navbar(){
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const main_content = document.querySelector(".main-content")
        if(window.innerWidth<700){
            sidebar.classList.add("collapse")
            // main_content.classList.add("active-main")
        }
     }, []);
    return(
        <div className="navbar">
            <i className="fa fa-bars" onClick={handleToggle}></i>
            <h2 className="nav-logo"><a href="#home">PORTFOLIO</a></h2>
        </div>
    )
}
export default Navbar;