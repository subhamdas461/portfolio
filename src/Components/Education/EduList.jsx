import React from "react";
import { BigPara, EduContainer } from "../../global.styles";
import styled from "styled-components";
import { FaGraduationCap, FaUserTie, FaSchool } from "react-icons/fa";

const BoldHead = styled.h2`
  font: 700 ${(props) => props.fsize} "montserrat", sans-serif;
`;

const RoundIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  background-color: rgb(39, 133, 62);
  margin-right: 10px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => props.pos};
  top: ${(props) => props.top};
  z-index: 1;
`;

const EduDetail = styled.div`
  background-color: rgb(69, 69, 80);
  flex: 1;
  padding: 30px 10px;
  
  &:before {
    content: "";
    position: absolute;
    width: 4px;
    height: 95%;
    left: 20px;
    border-radius: 6px;
    transform: translate(-50%);
    background-color: rgb(39, 133, 62);
  }
`;

const EduData = [
  {
    school: "National Institute of Technology, Arunchal Pradesh",
    course: "B.Tech in Computer Science and Engineering",
    year: "2018 - 2022",
    gpa: "GPA : 8.91",
  },
  {
    school: "GHSS, Tezu",
    course: "12th",
    year: "2017 - 2018",
    gpa: "Percentage : 76%",
  },
  {
    school: "Krick and Boury Memorial School, Tezu",
    course: "10th",
    year: "2015 - 2016",
    gpa: "CGPA : 9.4",
  },
];

const EduList = () => {
  return EduData.map((e, key) => {
    return (
      <EduContainer key={key} margin={`0 auto 30px auto`}>
        <RoundIcon>
          {key === 0 && <FaGraduationCap />}
          {key === 1 && <FaUserTie />}
          {key === 2 && <FaSchool />}
        </RoundIcon>
        {key === EduData.length - 1 && (
          <RoundIcon pos="absolute" top="calc(100% + 20px)" />
        )}
        <EduDetail>
          <BoldHead fsize="20px">{e.course}</BoldHead>
          <BigPara fsize="12px">({e.year})</BigPara>
          <BigPara margin="15px 0">{e.school}</BigPara>
          <BigPara fsize="12px">{e.gpa}</BigPara>
        </EduDetail>
      </EduContainer>
    );
  });
};

export default EduList;
