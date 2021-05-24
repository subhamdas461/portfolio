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
        
        sidebar.classList.remove("collapse")
        
        sidebar.classList.toggle("side-active")
        
    }
}

function Navbar(){
    return(
        <div className="navbar">
            <i className="fa fa-bars" onClick={handleToggle}></i>
            <h2 className="nav-logo"><a href="#home">PORTFOLIO</a></h2>
        </div>
    )
}
export default Navbar;