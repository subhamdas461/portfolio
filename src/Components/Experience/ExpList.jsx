import React from "react";
import { BigPara, EduContainer as ExpContainer, RoundIcon,BoldHead, EduDetail} from "../../global.styles";
import {FaBriefcase, FaUserTie, FaSchool, FaCode } from "react-icons/fa";
import styled from "styled-components";

const ExpData = [
  {
    school: "National Institute of Technology, Arunchal Pradesh",
    course: "B.Tech in Computer Science and Engineering",
    year: "2018 - 2022",
    gpa: "GPA : 8.91",
  },
  {
    school: "GHSS, Tezu",
    course: "12th (Higher Secondary)",
    year: "2017 - 2018",
    gpa: "Percentage : 76%",
  },
  {
    school: "Krick and Boury Memorial School, Tezu",
    course: "10th (Secondary)",
    year: "2015 - 2016",
    gpa: "CGPA : 9.4",
  },
];

const ExpDetailBox = styled(EduDetail)`
    text-align: left;
    padding: 20px;
`

const ExpList = (props) => {
  return ExpData.map((e, key) => {
    return (
      <ExpContainer key={key} margin={`0 auto 30px auto`}>
        <RoundIcon mode={props.mode}>
          {key === 0 && <FaBriefcase />}
          {key === 1 && <FaUserTie />}
          {key === 2 && <FaSchool />}
        </RoundIcon>
        {key === ExpData.length - 1 && (
          <RoundIcon mode={props.mode} pos="absolute" top="100%">
            <FaCode/>
          </RoundIcon>
        )}
        <ExpDetailBox mode={props.mode}>
          <BoldHead mode={props.mode} fsize="20px">{e.course}</BoldHead>
          <BigPara fsize="12px">({e.year})</BigPara>
          <BigPara margin="15px 0">{e.school}</BigPara>
          <BigPara fsize="12px">{e.gpa}</BigPara>
        </ExpDetailBox>
      </ExpContainer>
    );
  });
};

export default ExpList;
