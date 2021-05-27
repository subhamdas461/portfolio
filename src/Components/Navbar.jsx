import { useEffect } from "react";

const handleToggle = (item)=>{
    const sidebar = document.querySelector(".sidebar");
    const main_content = document.querySelector(".main-content")
  
    if(window.innerWidth>699){
        sidebar.classList.toggle("collapse");
        main_content.classList.toggle("active-main")    
    }
    else{   
        sidebar.classList.remove("collapse")

    }
}

function Navbar(){
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const main_content = document.querySelector(".main-content")
        if(window.innerWidth<700){
           
            main_content.classList.add("active-main")
            sidebar.classList.add("collapse")
        }
        window.addEventListener("resize",()=>{
            if(window.innerWidth < 700){
                if(! sidebar.classList.contains("collapse") && main_content.classList.contains("active-main")){
                    return;
                }
                sidebar.classList.add("collapse")
                main_content.classList.add("active-main")
            }
            else{
                if(sidebar.classList.contains("collapse") && main_content.classList.contains("active-main")){
                    return;
                }
                sidebar.classList.remove("collapse")
                main_content.classList.remove("active-main")

            }
        })
     }, []);

    return(
        <div className="navbar">
            <i className="icon fas fa-bars" onClick={handleToggle}></i>
            <h2 className="nav-logo"><a href="#home">PORTFOLIO</a></h2>
        </div>
    )
}
export default Navbar;