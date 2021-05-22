const handleToggle = (item)=>{
    const sidebar = document.querySelector(".sidebar");
    const main_content = document.querySelector(".main-content")
    sidebar.classList.toggle("collapse");
    main_content.classList.toggle("active-main")
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