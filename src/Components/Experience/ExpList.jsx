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
import { FaBriefcase, FaUserTie, FaSchool, FaCode } from "react-icons/fa";
import styled from "styled-components";
import JCLogo from "../../images/jeeCarnotLogo.png"
import GdgLogo from "../../images/gdgLogo.bmp"
import ISLogo from "../../images/isLogo.bmp"

const ExpData = [
  {
    tasks: "lorem lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt kjbkbk",
    org: "Crio.Do",
    year: "Feb 2021 - Mar 2021",
    position: "Full-stack Development Externship",
    logo: JCLogo
  },
  {
    tasks: "lorem lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt kjbkbk",
    org: "JEE Carnot",
    year: "Dec 2020 - Jan 2021",
    position: "Front-End Intern",
    logo: JCLogo
  },
  {
    tasks: "lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt",
    org: "Google Developer Group, Kolkata",
    year: "Apr 2020 - present",
    position: "Member",
    logo: GdgLogo
  },
  {
    tasks: "lat necessitatibus ab unde illum asperiores corporis placeat nostrum corrupti magni a nulla natus possimus molestias facilis quam excepturi omnis. Magnam vel at velit exercitationem! Aperiam similique praesentium quam, voluptatum ipsum eligendi eum incidunt",
    org: "Internshala",
    year: "Jun 2020 - Aug 2020",
    position: "Student Partner",
    logo: ISLogo
  },
];
const Italics = styled.span`
  display: block;
  color: #c5cbe6;
  padding: 5px 0;
  font:italic 400 16px "Montserrat",sans-serif;
`

const ExpHead = styled(BoldHead)`
  flex: 0 0 minmax(200px,500px);
  display: flex;
  align-items: center;
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
          {key === 0 && <FaBriefcase />}
          {key === 1 && <FaCode />}
          {key === 2 && <FaSchool />}
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
          <Italics>{e.position}</Italics>
          <BigPara margin="15px 0">{e.tasks}</BigPara>
          
        </ExpDetailBox>
      </ExpContainer>
    );
  });
};

export default ExpList;
