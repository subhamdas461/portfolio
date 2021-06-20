import styled from "styled-components";
import { MainDiv } from "../../global.styles";
import ProjectList from "./ProjectList";

const ProjectMain = styled(MainDiv)`
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(90% + 20px);
  /* justify-content: center; */
`;

const projectsList = [
  {
    name: "Meme Stream",
    description: "Post your meme",
    link: "",
    img: "",
  },
  {
    name: "",
    description: "",
    link: "",
    img: "",
  },
  {
    name: "",
    description: "",
    link: "",
    img: "",
  },
  {
    name: "Tic-Tac-Toe",
    description: "A simple tic-tac-toe game",
    link: "",
    img: "",
  },
];
function Project() {
  return (
    <div id="project" className="project section">
      <h1>Projects</h1>
      <ProjectMain>
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
        <ProjectList />
      </ProjectMain>
    </div>
  );
}
export default Project;
