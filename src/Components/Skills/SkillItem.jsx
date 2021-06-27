import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useCustomInView } from "../../obs.animation";

function SkillItem(props) {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [inView, ref] = useCustomInView(1);
  const animationCon = useAnimation();
  useEffect(() => {
    if (inView) {
      let t = setInterval(() => {
        setProgress((prev) => {
          if (prev < props.progress) {
            return prev + 1;
          }
          return prev;
        });
      }, 20);
      setIntervalId(t);
      animationCon.start({ width: `${props.progress}%` });
    }
    // eslint-disable-next-line
  }, [inView]);
  useEffect(() => {
    if (progress === props.progress) {
      clearInterval(intervalId);
    }
    // eslint-disable-next-line
  }, [progress]);
  return (
    <div className="skill-item">
      <p>{props.name}</p>

      <div className="progress">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={animationCon}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 60,
            bounce: 1,
            delay: 0.2,
          }}
          className="progressbar"
          style={{
            width: props.progress + "%",
          }}
        >
          <span className="pg-percent">{progress}%</span>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillItem;
