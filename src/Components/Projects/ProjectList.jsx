import styled from "styled-components";
import projImg1 from "../../images/background-attach.jpg";
import { BigPara, BoldHead } from "../../global.styles";
import { FiExternalLink } from "react-icons/fi";
import { animationTypes, useCustomInView } from "../../obs.animation";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Project = styled(motion.div)`
  position: relative;
  flex: 1 1 280px;
  height: 240px;
  margin: 12px;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  justify-content: center;
  box-shadow: 0 0 5px 0 #00000057;
  user-select: none;
  background-image: url(${projImg1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  &:after {
    content: "";
    transition: all 0.3s ease-in-out;
    position: absolute;
    background-image: linear-gradient(#00000068, #130f20b5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* opacity: 0; */
    z-index: -1;
  }
  > * {
    color: #fff !important;
    /* transition: all 0.3s ease-in-out; */
    /* opacity: 0; */
    padding: 8px 0;
    /* transform: translateY(50px); */
  }
  &:hover {
    transform: translateY(-100px);
    box-shadow: 0 8px 15px -6px rgba(0, 0, 0, 0.788);
  }
`;
const ProjectList = ({ data }) => {
  const [inView, ref] = useCustomInView();
  const animCon = useAnimation();
  useEffect(() => {
    if (inView) {
      animCon.start(animationTypes.rightLeft);
    }
  }, [inView, animCon]);
  return (
    <Project
      imgSrc={projImg1}
      initial={{ opacity: 0, x: -100 }}
      animate={animCon}
      transition={{ duration: 0.4, ease: "backIn" }}
      ref={ref}
      onClick={() => {
        window.open(data.link, "_blank");
      }}
    >
      <BoldHead fsize="18px">
        {data.name} <FiExternalLink size="14px" />
      </BoldHead>
      <BigPara>{data.description}</BigPara>
    </Project>
  );
};

export default ProjectList;
