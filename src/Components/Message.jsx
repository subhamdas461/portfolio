import React from "react";
import {
    IoMdCheckmarkCircleOutline,
    IoMdCloseCircleOutline,
    IoMdWarning,
} from "react-icons/io";
import { SmallIcon } from "../global.styles";
import styled from "styled-components";
import { motion } from "framer-motion";

const MessageBox = styled(motion.div)`
    position: fixed;
    z-index: 100;
    background-color: ${(props) =>
        props.type === "success"
            ? "#25bb69"
            : props.type === "error"
            ? " #e04b4b"
            : "#e29f61"};
    color: #fff;
    right: 10px;
    top: 70px;
    width: 260px;
    text-align: center;
    padding: 20px 5px;
    overflow: hidden;
    border-radius: 8px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 6px;
        width: 0;

        background-color: inherit;
        filter: brightness(80%);
        animation: barTimeout 4s linear;
        animation-fill-mode: forwards;
    }
    @keyframes barTimeout {
        100% {
            width: 100%;
        }
    }
    h2 {
        font-family: "montserrat", sans-serif;
        font-size: 14px;
        padding: 5px 0;
        font-weight: 400;
    }
`;
const Message = ({ type, message }) => {
    let Icon;
    if (type === "success") {
        Icon = <IoMdCheckmarkCircleOutline size="24" />;
    }
    if (type === "error") {
        Icon = <IoMdCloseCircleOutline size="24" />;
    }
    if (type === "warning") {
        Icon = <IoMdWarning size="24" />;
    }
    return (
        <MessageBox
            initial={{ x: "110%", opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            exit={{ x: "110%", opacity: 0 }}
            type={type}
        >
            <SmallIcon>
                {Icon}
                <h2>{message}</h2>
            </SmallIcon>
        </MessageBox>
    );
};

export default Message;
