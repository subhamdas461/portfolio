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
  }, [inViewImg, inViewPara]);

  return (
    <div id="about" className="about section">
      <h1>About Me</h1>
      <FlexContainer top="100px">
        <BigPara
          initial={{ opacity: 0, x: -100 }}
          animate={animationPara}
          transition={{ ease: "backOut", duration: 0.8 }}
          ref={para}
          margin="10px"
          flex="1 1 250px"
          lineHeight="25px"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
          dolorum ex consequuntur animi eaque dignissimos, cupiditate quod
          repellat necessitatibus ab unde illum asperiores corporis placeat
          praesentium quam, voluptatum ipsum eligendi eum incidunt omnis quod
          doloremque repellat voluptas similique distinctio asperiores? Placeat.
        </BigPara>
        <Image
          initial={{ opacity: 0, x: 100 }}
          animate={animationImg}
          transition={{ ease: "backOut", duration: 0.8, delay: 0.3 }}
          ref={img}
          src={ImageSrc}
          flex="1 1 250px"
        />
      </FlexContainer>
    </div>
  );
}
export default About;
