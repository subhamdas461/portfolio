import styled from "styled-components";

import { BigPara, BoldHead, SimpleFlex, LinkIcon } from "../../global.styles";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { animationTypes, useCustomInView } from "../../obs.animation";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Project = styled(motion.div)`
    position: relative;
    flex: 1 1 300px;
    height: 280px;
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
    background-image: linear-gradient(#00000058, #0d112cb5),
        url(${(props) => props.imgSrc});
    background-size: cover;

    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;

    > * {
        transition: all 0.25s ease;
        color: #fff !important;

        padding: 0px 0;
    }
    &:hover {
        h2 {
            transform: translateY(-5px) scale(1.1);
        }
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
            imgSrc={data.img}
            initial={{ opacity: 0, x: 80 }}
            animate={animCon}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={ref}
        >
            <BoldHead fsize="20px">{data.name}</BoldHead>
            <BigPara margin="8px 0">{data.description}</BigPara>
            <SimpleFlex jusCont="center">
                {data.source && (
                    <LinkIcon
                        onClick={() => {
                            window.open(data.source, "_blank");
                        }}
                    >
                        <FiGithub title="Source Code" />
                    </LinkIcon>
                )}
                {data.link && (
                    <LinkIcon
                        onClick={() => {
                            window.open(data.link, "_blank");
                        }}
                    >
                        <FiExternalLink title="Live Demo" />
                    </LinkIcon>
                )}
            </SimpleFlex>
        </Project>
    );
};

export default ProjectList;
