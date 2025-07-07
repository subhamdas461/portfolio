import { BigPara, FlexContainer } from "../global.styles";
import { useCustomInView, animationTypes } from "../obs.animation";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import ImageSrc from "../images/about-sm.jpeg";
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
    one: "I am a Software Engineer at Samsung R&D Institute, Noida, with a Bachelor’s degree in Computer Science and Engineering from NIT Arunachal Pradesh. I specialize in full-stack development, with additional experience in AI integration and Android application development.",
    two: "At Samsung, I have led end-to-end development of full-stack web applications, built scalable dashboards to accelerate AI model development. I bring a strong foundation in both frontend and backend technologies, complemented by hands-on work in machine learning and speech technologies.",
    three: "I am passionate about building robust, user-centric systems that blend modern web development, intelligent features, and seamless cross-platform performance.",
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
                    <br />
                    <br />
                    {about.two}
                    <br />
                    <br />
                    {about.three}
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
