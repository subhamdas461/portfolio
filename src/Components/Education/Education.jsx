import EduList from "./EduList";
import { MainDiv } from "../../global.styles";
import { container, useCustomInView } from "../../obs.animation";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function Education(props) {
  const [inView, ref] = useCustomInView();
  const animate = useAnimation();

  useEffect(() => {
    if (inView) {
      animate.start("show");
    }
  }, [inView, animate]);

  return (
    <div id="education" className="education section">
      <h1>Education</h1>
      <MainDiv
        ref={ref}
        variants={container}
        initial="hidden"
        animate={animate}
      >
        <EduList mode={props.mode} />
      </MainDiv>
    </div>
  );
}
export default Education;
