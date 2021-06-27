// import { useAnimation } from "framer-motion";
import React from "react";
// import { useEffect } from "react";
import styled from "styled-components";
import { MainDiv } from "../../global.styles";
// import { animationTypes, useCustomInView } from "../../obs.animation";
import ProjectList from "./ProjectList";

const ProjectMain = styled(MainDiv)`
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(90% + 24px);
  /* justify-content: center; */
`;

const projectsList = [
  {
    name: "Meme Stream",
    description: "Post your meme",
    link: "https://xmemer-post-app.herokuapp.com/",
    img: "",
  },
  {
    name: "Signup-Login System",
    description: "Signup",
    link: "",
    img: "",
  },
  {
    name: "Weather App",
    description: "Get current weather details",
    link: "https://currentweather-here.web.app/",
    img: "",
  },
  {
    name: "Tic-Tac-Toe",
    description: "A simple tic-tac-toe game",
    link: "https://github.com/subhamdas461/simple-TicTacToe",
    img: "",
  },
];

function Project() {
  return (
    <div id="project" className="project section">
      <h1>Projects</h1>
      <ProjectMain>
        {projectsList.map((e, id) => (
          <ProjectList key={id} data={e} />
        ))}
      </ProjectMain>
    </div>
  );
}
export default Project;
