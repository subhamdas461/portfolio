import React, { useEffect } from "react";
import {
    BigPara,
    EduContainer as ExpContainer,
    SimpleFlex,
    RoundIcon,
    BoldHead,
    EduDetail,
    ImageLogo,
} from "../../global.styles";

import styled from "styled-components";

import { animationTypes, useCustomInView } from "../../obs.animation";
import { useAnimation } from "framer-motion";

const Italics = styled.span`
    display: block;
    color: ${(pro) => (pro.mode === "light" ? "#5a5b81" : "#b7d4ff")};
    padding: 5px 0;
    font: italic 400 14px "Montserrat", sans-serif;
`;

const ExpHead = styled(BoldHead)`
    flex: 0 0 minmax(200px, 500px);
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

const ExpDetailBox = styled(EduDetail)`
    text-align: left;
    padding: 20px;
`;
const UnoList = styled.ul`
    color: ${(props) => (props.mode === "dark" ? "#fff" : "#000")};
    margin: 0 15px;
    font: 15px "montserrat", sans-serif;
    li {
        margin: 7px 0 0 0;
    }
`;
const ExpList = (props) => {
    const { data } = props;
    const [inView, ref] = useCustomInView(0.1);
    const animCon = useAnimation();
    useEffect(() => {
        if (inView) {
            animCon.start(animationTypes.topBottom);
        }
    }, [inView, animCon]);

    return (
        <ExpContainer
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={animCon}
            transition={{ duration: 0.6, type: "spring", delay: 0.3 }}
            margin={`0 auto 30px auto`}
        >
            <RoundIcon mode={props.mode}>{data.icon}</RoundIcon>
            {data.end && (
                <RoundIcon
                    mode={props.mode}
                    pos="absolute"
                    top="100%"
                ></RoundIcon>
            )}
            <ExpDetailBox mode={props.mode}>
                <SimpleFlex jusCont="space-between" alItem="center" mobBlock>
                    <ExpHead
                        onClick={() => window.open(data.link, "_blank")}
                        mode={props.mode}
                        fsize="16px"
                    >
                        <ImageLogo alt="logo" src={data.logo} />
                        {data.org}
                    </ExpHead>
                    <BigPara flex="0 0 130px" textAlign="right" fsize="12px">
                        {data.year}
                    </BigPara>
                </SimpleFlex>
                <Italics mode={props.mode}>{data.position}</Italics>

                <UnoList mode={props.mode}>
                    {data.tasks.map((e, id) => (
                        <li key={id}>{e}</li>
                    ))}
                </UnoList>
            </ExpDetailBox>
        </ExpContainer>
    );
};

export default ExpList;
