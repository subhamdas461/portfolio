import React from "react";
import { RiToolsLine } from "react-icons/ri";
import { BigPara, SmallIcon } from "../global.styles";

function Footer() {
    return (
        <footer>
            <BigPara dark fsize="14px">
                Developed
            </BigPara>
            <SmallIcon>
                <RiToolsLine />
            </SmallIcon>
            <BigPara dark fsize="14px">
                by Subham Das | 2021
            </BigPara>
        </footer>
    );
}

export default Footer;
