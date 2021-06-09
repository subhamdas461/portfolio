import { waitFor } from "@testing-library/dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div id="home" className="home section">
      <div className="home-content">
        <motion.div
          initial={{opacity:0, x : -200}}
          animate={{opacity:1,x: 0}}
          transition={
           {
             type:"spring",
             duration:1
           }
          }
          className="profile-img"
        ></motion.div>
        <p className="home-name">Hi, I'm Subham Das</p>
        <p className="home-info">CS Student, Web Developer.</p>
        <a
          href="https://drive.google.com/file/d/1B23yWWI4fqvj1ksGrOL2tQ4OxC94N29n/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="resume"
        >
          Resume
        </a>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/subba.JH"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/subham.das.148553/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.hackerrank.com/JordanHaste"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-hackerrank"></i>
          </a>
          <a
            href="https://github.com/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
