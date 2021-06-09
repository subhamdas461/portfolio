import { useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

function SkillItem(props) {
  const {scrollY,scrollYProgress} = useViewportScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200])
  const zRotAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0])

  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
  useEffect(() => {
    console.log(scrollY,scrollYProgress);
  }, []);
  return (
    <motion.div 
        className="skill-item"
        style={{
            scale: scaleAnim,
            y:yPosAnim
        }}
        
    >
      <p>{props.name}</p>

      <div className="progress">
        <div
          className="progressbar"
          style={{
            width: props.progress + "%",
          }}
        >
          <span className="pg-percent">{props.progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillItem;
