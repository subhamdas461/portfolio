import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect } from "react";

function Home() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const animationImage = useAnimation();
  const animationName = useAnimation();
  const animationPara = useAnimation();
  const animationResume = useAnimation();
  const animationIcons = useAnimation();

  useEffect(() => {
    if (inView) {
      animationImage.start({ opacity: 1, y: 0 });
      animationName.start({ opacity: 1, x: 0 });
      animationPara.start({ opacity: 1, y: 0 });
      animationResume.start({ opacity: 1 });
      animationIcons.start("show");
    }
    if (!inView) {
    }
  }, [inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.8,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, rotateZ: 180 },
    show: { opacity: 1, y: 0, rotateZ: 0, transition: { duration: 0.5 } },
  };
  return (
    <div ref={ref} id="home" className="home section">
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={animationImage}
          transition={{
            delay: 0.4,
            type: "spring",
            bounce: 0,
            stiffness: 20,
            duration: 1.8,
          }}
          className="profile-img"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, x: 70 }}
          animate={animationName}
          transition={{
            delay: 1,
            type: "tween",
            duration: 0.8,
          }}
          className="home-name"
        >
          Hi, I'm Subham Das
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={animationPara}
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
          animate={animationResume}
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
          animate={animationIcons}
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
