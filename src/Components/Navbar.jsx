import { useEffect, useRef } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const handleToggle = () => {
  const sidebar = document.querySelector(".sidebar");
  const main_content = document.querySelector(".main-content");

  if (window.innerWidth > 700) {
    document.querySelector(".navbar").classList.toggle("active-main");
    sidebar.classList.toggle("collapse");
    main_content.classList.toggle("active-main");
  } else {
    sidebar.classList.remove("collapse");
  }
};

function Navbar(props) {
  const nav = useRef();
  let light_navbar = props.mode === "dark" ? "" : "light-mode-navbar";
  let light_icon = props.mode === "dark" ? "" : "light-icon";
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const main_content = document.querySelector(".main-content");
    if (window.innerWidth < 700) {
      main_content.classList.add("active-main");
      sidebar.classList.add("collapse");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        if (
          !sidebar.classList.contains("collapse") &&
          main_content.classList.contains("active-main") &&
          nav.current.classList.contains("active-main")
        ) {
          return;
        }
        sidebar.classList.add("collapse");
        main_content.classList.add("active-main");
        nav.current.classList.add("active-main");
      } else {
        if (
          sidebar.classList.contains("collapse") &&
          main_content.classList.contains("active-main") &&
          nav.current.classList.contains("active-main")
        ) {
          return;
        }
        sidebar.classList.remove("collapse");
        main_content.classList.remove("active-main");
        nav.current.classList.remove("active-main");
      }
    });
  }, []);
  return (
    <div ref={nav} className={`navbar ${light_navbar}`}>
      <RiBarChartHorizontalLine
        className={`menu-bar ${light_icon}`}
        onClick={handleToggle}
      />
      <h2 className="nav-logo">
        <a href="#home">Subham Das</a>
      </h2>
    </div>
  );
}
export default Navbar;
