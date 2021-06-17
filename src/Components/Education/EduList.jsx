import React from "react";
import { BigPara, EduContainer, RoundIcon,BoldHead, EduDetail} from "../../global.styles";
import { FaGraduationCap, FaUserTie, FaSchool } from "react-icons/fa";


const EduData = [
  {
    school: "National Institute of Technology, Arunachal Pradesh",
    course: "B.Tech in Computer Science and Engineering",
    year: "2018 - 2022",
    gpa: "GPA : 8.91",
    icon: <FaGraduationCap />
  },
  {
    school: "Govt. Higher Secondary School, Tezu",
    course: "12th (Higher Secondary)",
    year: "2017 - 2018",
    gpa: "Percentage : 76%",
    icon: <FaUserTie />
  },
  {
    school: "Krick and Boury Memorial School, Tezu",
    course: "10th (Secondary)",
    year: "2015 - 2016",
    gpa: "CGPA : 9.4",
    icon: <FaSchool />
  },
];

const EduList = (props) => {
  return EduData.map((e, key) => {
    return (
      <EduContainer key={key} margin={`0 auto 30px auto`}>
        <RoundIcon mode={props.mode}>
          {e.icon}
        </RoundIcon>
        {key === EduData.length - 1 && (
          <RoundIcon mode={props.mode} pos="absolute" top="100%">
            
          </RoundIcon>
        )}
        <EduDetail mode={props.mode}>
          <BoldHead mode={props.mode} fsize="20px">{e.course}</BoldHead>
          <BigPara fsize="12px">( {e.year} )</BigPara>
          <BigPara margin="15px 0">{e.school}</BigPara>
          <BigPara fsize="12px">{e.gpa}</BigPara>
        </EduDetail>
      </EduContainer>
    );
  });
};

export default EduList;
