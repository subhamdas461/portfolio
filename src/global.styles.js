import styled from "styled-components";
import { motion } from "framer-motion";
const globalValues = {
  fontSmall: 12,
  fontBig: 18,
  fontFam: "montserrat",
};

export const BigPara = styled(motion.p)`
  color: #fff;
  color: ${(props) => props.dark && "#fff !important"};
  line-height: ${(props) => props.lineHeight};
  font-size: ${(props) => props.fsize};
  font-family: "${globalValues.fontFam}", sans-serif;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  text-align: ${(props) => props.textAlign};
  flex: ${(props) => props.flex};
  margin-top: ${(prop) => prop.top};
`;
export const MainDiv = styled(motion.div)`
  margin: 120px auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 90%;
  /* background-color: red; */
`;
export const EduContainer = styled(motion.div)`
  text-align: center;
  color: #fff;
  width: 100%;
  display: flex;
  position: relative;
  margin: ${(props) => props.margin};
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(90% + 20px);
  margin: ${(props) => props.top} auto auto;
  flex-wrap: wrap;
  max-width: 1000px;
`;
export const SimpleFlex = styled.div`
  display: flex;
  justify-content: ${(props) => props.jusCont};
  align-items: ${(props) => props.alItem};
  @media only screen and (max-width: 525px) {
    display: ${(props) => (props.mobBlock ? "block" : "flex")};
    text-align: left;
  }
`;
export const BoldHead = styled(motion.h2)`
  font: 700 ${(props) => props.fsize} "montserrat", sans-serif;
  color: ${(props) =>
    props.mode === "dark" ? "#fff" : "var(--dark-sidebar-bg)"};
`;

export const RoundIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  background-color: var(--btn-hover);
  margin-right: 10px;
  color: #ffffff;
  box-shadow: 0 0 0 5px
    ${(props) => (props.mode === "dark" ? "var(--dark-body-bg)" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.pos};
  top: ${(props) => props.top};
  z-index: 1;
`;

export const EduDetail = styled(motion.div)`
  background-color: ${(props) =>
    props.mode === "dark" ? "rgb(69, 69, 80)" : "rgba(201, 211, 223, 0.267)"};
  flex: 1;
  border-radius: 5px;
  padding: 25px 10px;
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: calc(100% + 30px);
    left: 20px;
    top: 0;
    transform: translate(-50%);
    background-color: var(--btn-hover);
  }
`;

export const ImageLogo = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px 0 0;
  padding: 0px;
  border-radius: 5px;
  object-fit: cover;
  background-color: var(--light-sidebar-bg);
`;
export const SmallIcon = styled.span`
  /* color: red; */
  font-size: 18px;
  margin: 0 5px;
  display: inline-grid;
  place-items: center;
`;

export const LinkIcon = styled.div`
  margin: 0 15px;
  cursor: pointer;
  font-size: 22px;
`;
