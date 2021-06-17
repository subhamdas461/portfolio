import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        
        delayChildren:1.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y:50,rotateZ:180 },
    show: { opacity: 1, y:0,rotateZ:0 ,transition: { duration: 0.5 }}
  };
  return (
    <div id="home" className="home section">
      <div className="home-content">
        <motion.div
          initial={{ opacity:0, y: -60 }}
          animate={{ opacity:1, y: 0 }}
          transition={{
            delay: 0.4,
            type: "spring",
            bounce: 0,
            stiffness:100,
            duration: 1.6,
          }}
          className="profile-img"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.7,
            type: "tween",
            duration: 0.8,
          }}
          className="home-name"
        >
          Hi, I'm Subham Das
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            type: "tween",
            duration: 0.8,
          }}
          className="home-info"
        >
          CS Student, Web Developer
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.9,
            type: "tween",
            duration: 1,
          }}
          href="https://drive.google.com/file/d/1B23yWWI4fqvj1ksGrOL2tQ4OxC94N29n/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          className="resume"
        >
          Resume
        </motion.a>

        <motion.div
         
          className="social-icons"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.a
            variants={item}
            href="https://linkedin.com/in/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.instagram.com/subba.JH"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            variants={item}
            href="https://www.facebook.com/subham.das.148553/"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.hackerrank.com/JordanHaste"
            rel="noreferrer"
            target="_blank"
          >
            <FaHackerrank />
          </motion.a>
          <motion.a
            variants={item}
            href="https://github.com/subhamdas461"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
export default Home;
