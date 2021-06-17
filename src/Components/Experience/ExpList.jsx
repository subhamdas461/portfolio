import React from "react";
import {
  BigPara,
  EduContainer as ExpContainer,
  SimpleFlex,
  RoundIcon,
  BoldHead,
  EduDetail,
  ImageLogo
} from "../../global.styles";
import { FaBriefcase, FaCode, FaHandshake } from "react-icons/fa";
import {  MdGroup } from "react-icons/md";
import styled from "styled-components";
import JCLogo from "../../images/jeeCarnotLogo.png"
import GdgLogo from "../../images/gdgLogo.bmp"
import ISLogo from "../../images/isLogo.bmp"
import CrioLogo from "../../images/crioLogoDark.jpg"

const ExpData = [
  {
    org: "Crio.Do",
    tasks: "Participated in Crio's Winter of Doing program(2021). ",
    year: "Feb 2021 - Mar 2021",
    position: "Winter of Doing Participant",
    logo: CrioLogo,
    icon : <FaCode/>
  },
  {
    org: "JEE Carnot",
    tasks: "lorem lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt kjbkbk",
    year: "Dec 2020 - Jan 2021",
    position: "Front-End Intern",
    logo: JCLogo,
    icon : <FaBriefcase/>
  },
  {
    org: "Google Developer Group, Kolkata",
    tasks: "lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt",
    year: "Apr 2020 - present",
    position: "Member",
    logo: GdgLogo,
    icon : <MdGroup/>
  },
  {
    org: "Internshala",
    tasks: "lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt",
    year: "Jun 2020 - Aug 2020",
    position: "Student Partner",
    logo: ISLogo,
    icon : <FaHandshake/>
  },
];
const Italics = styled.span`
  display: block;
  color:${pro=>pro.mode==="light"?"#5a5b81":"#b7d4ff"};
  padding: 5px 0;
  font:italic 400 16px "Montserrat",sans-serif;
`

const ExpHead = styled(BoldHead)`
  flex: 0 0 minmax(200px,500px);
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`

// const TimePeriod = styled(BigPara)`
  
//   @media only screen and (max-width:525px){
//       /* text-align: left; */
//     }
// `
const ExpDetailBox = styled(EduDetail)`
  text-align: left;
  padding: 10px;
`;

const ExpList = (props) => {
  return ExpData.map((e, key) => {
    return (
      <ExpContainer key={key} margin={`0 auto 30px auto`}>
        <RoundIcon mode={props.mode}>
           {e.icon}
        </RoundIcon>
        {key === ExpData.length - 1 && (
          <RoundIcon mode={props.mode} pos="absolute" top="100%">
            {/* <FaCode /> */}
          </RoundIcon>
        )}
        <ExpDetailBox mode={props.mode}>
          <SimpleFlex jusCont="space-between" alItem="center">
            <ExpHead mode={props.mode} fsize="20px">
              <ImageLogo src={e.logo}/>
              {e.org}
            </ExpHead>
            <BigPara flex="0 0 130px" textAlign="right" fsize="12px">{e.year}</BigPara>
          </SimpleFlex>
          <Italics mode={props.mode}>{e.position}</Italics>
          <BigPara margin="15px 0">{e.tasks}</BigPara>
          
        </ExpDetailBox>
      </ExpContainer>
    );
  });
};

export default ExpList;
