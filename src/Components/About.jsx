import { BigPara, FlexContainer } from "../global.styles";
import { useCustomInView, animationTypes } from "../obs.animation";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import ImageSrc from "../images/background-attach-sm.jpg";
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
    one: "I'm currently a final year undergraduate student, pursuing Bachelor's in Computer Science and Engineering from NIT Arunachal Pradesh. Passionate about software development and design. My focus is to create efficient, scalable, and robust systems.",
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
                    lineHeight="22px"
                >
                    {about.one}
                </BigPara>
                <Image
                    alt="about-img"
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
