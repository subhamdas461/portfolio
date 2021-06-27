import { BigPara, FlexContainer } from "../global.styles";
import { useCustomInView, animationTypes } from "../obs.animation";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import ImageSrc from "../images/background-attach.jpg";
import { useEffect } from "react";
const Image = styled(motion.img)`
  width: 300px;
  height: 300px;
  margin: 10px;
  flex: ${(props) => props.flex};
  object-fit: cover;
  border-radius: 5px;
  background-color: var(--dark-sidebar-bg);
`;
const about = {
  one: "I'm currently a final year Computer Science and Engineering student at NIT Arunachal Pradesh. Passionate about web development and front-end design. I enjoy developing and designing products for the web.",
};

function About() {
  const [inViewPara, para] = useCustomInView();
  const [inViewImg, img] = useCustomInView();
  const animationPara = useAnimation();
  const animationImg = useAnimation();

  useEffect(() => {
    if (inViewPara) {
      animationPara.start(animationTypes.rightLeft);
    }
    if (inViewImg) {
      animationImg.start(animationTypes.rightLeft);
    }
  }, [inViewImg, inViewPara, animationPara, animationImg]);

  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <FlexContainer top="100px">
        <BigPara
          initial={{ opacity: 0, x: -100 }}
          animate={animationPara}
          transition={{ ease: "backOut", duration: 1 }}
          ref={para}
          margin="10px"
          flex="1 1 250px"
          lineHeight="24px"
        >
          {about.one}
        </BigPara>
        <Image
          initial={{ opacity: 0, x: 100 }}
          animate={animationImg}
          transition={{ ease: "backOut", duration: 1, delay: 0.3 }}
          ref={img}
          src={ImageSrc}
          flex="1 1 250px"
        />
      </FlexContainer>
    </div>
  );
}
export default About;
