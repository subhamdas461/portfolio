import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useCustomInView } from "../../obs.animation";

function SkillItem(props) {
  const [inView, ref] = useCustomInView(1);
  const animationCon = useAnimation();
  useEffect(() => {
    if (inView) {
      animationCon.start({ width: `${props.progress}%` });
    }
  }, [inView]);
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
          <span className="pg-percent">{props.progress}%</span>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillItem;
