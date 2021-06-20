import styled from "styled-components";
import projImg1 from "../../images/project1.png";
import { BigPara, BoldHead } from "../../global.styles";
const Project = styled.div`
  position: relative;
  flex: 1 0 240px;
  height: 200px;
  margin: 10px;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  justify-content: end;

  user-select: none;
  background-image: url(${projImg1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  &:after {
    content: "";
    transition: all 0.3s ease-in-out;
    position: absolute;
    background-image: linear-gradient(#00000022, #282241a6);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    z-index: -1;
  }
  > * {
    color: #fff !important;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    padding: 10px 0;
    transform: translateY(50px);
  }
  &:hover {
    box-shadow: 0 8px 16px -10px rgba(23, 34, 43, 0.678);
    /* scale: 1.1; */
    transform: scale(1.05);
    &:after {
      opacity: 1;
    }
    > * {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const ProjectList = (props) => {
  return (
    <Project>
      <BoldHead fsize="18px">Heading</BoldHead>
      <BigPara>Description of project</BigPara>
    </Project>
  );
};

export default ProjectList;
