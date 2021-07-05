import styled from "styled-components";
import projImg1 from "../../images/background-attach.jpg";
import { BigPara, BoldHead, SimpleFlex, LinkIcon } from "../../global.styles";
import { FiExternalLink, FiGithub } from "react-icons/fi";
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
    background-image: linear-gradient(#00000068, #130f20b5), url(${projImg1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;

    > * {
        color: #fff !important;
        /* transition: all 0.3s ease-in-out; */
        /* opacity: 0; */
        padding: 5px 0;
        /* transform: translateY(50px); */
    }
    &:hover {
        transform: translateY(-100px);
        box-shadow: 0 8px 15px -2px rgba(0, 0, 0, 0.623);
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
            initial={{ opacity: 0, x: 80 }}
            animate={animCon}
            transition={{ duration: 0.5, ease: "easeOut" }}
            ref={ref}
        >
            <BoldHead fsize="18px">{data.name}</BoldHead>
            <BigPara margin="5px 0">{data.description}</BigPara>
            <SimpleFlex jusCont="center">
                <LinkIcon
                    onClick={() => {
                        window.open(data.source, "_blank");
                    }}
                >
                    <FiGithub title="Source Code" />
                </LinkIcon>
                <LinkIcon
                    onClick={() => {
                        window.open(data.link, "_blank");
                    }}
                >
                    <FiExternalLink title="Live Demo" />
                </LinkIcon>
            </SimpleFlex>
        </Project>
    );
};

export default ProjectList;
