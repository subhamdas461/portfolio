import { useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdClose } from "react-icons/md";

function Sidebar(props) {
  const sidebarRef = useRef();
  const handleQuit = (e) => {
    sidebarRef.current.classList.remove("side-active");
    sidebarRef.current.classList.add("collapse");
  };
  let handleMode = () => {
    props.mode === "dark"
      ? props.changeTheme("light")
      : props.changeTheme("dark");
  };
  const hideSide = (e) => {
    if (window.innerWidth < 700) sidebarRef.current.classList.add("collapse");
  };
  let light_sidebar = props.mode === "dark" ? "" : "light-mode-sidebar";
  let light_icon = props.mode === "dark" ? "" : "light-icon";
  return (
    <div ref={sidebarRef} className={`sidebar ${light_sidebar}`}>
      <MdClose className={`cross-icon ${light_icon}`} onClick={handleQuit} />
      <ul>
        <li>
          <a onClick={hideSide} href="#home">
            HOME
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#education">
            EDUCATION
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#skills">
            SKILLS
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#experience">
            EXPERIENCE
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#project">
            PROJECTS
          </a>
        </li>
        <li>
          <a onClick={hideSide} href="#contact">
            CONTACT
          </a>
        </li>
      </ul>

      <div className="dark-mode-btn" onClick={handleMode}>
        {props.mode === "dark" ? <FaSun /> : <FaMoon />}
        <p>{props.mode === "dark" ? "Light" : "Dark"}Mode</p>
      </div>
    </div>
  );
}
export default Sidebar;
