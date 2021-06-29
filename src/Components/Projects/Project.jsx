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
`;

const projectsList = [
  {
    name: "Meme Stream",
    description: "Post your meme",
    source: "https://github.com/subhamdas461/X-meme-crio",
    link: "https://xmemer-post-app.herokuapp.com/",
    img: "",
  },
  {
    name: "Signup-Login System",
    description: "Signup",
    source: "https://github.com/subhamdas461/auth-email-nodejs",
    link: "",
    img: "",
  },
  {
    name: "Github-Profile-Card",
    description: "See your github profile in card view",
    source: "https://github.com/subhamdas461/github-users",
    link: "",
    img: "",
  },
  {
    name: "Weather App",
    description: "Get current weather details",
    source: "https://github.com/subhamdas461/current-weather",
    link: "https://currentweather-here.web.app/",
    img: "",
  },
  {
    name: "Todo-App",
    description: "List all your task",
    source: "https://github.com/subhamdas461/todo-app-reactjs",
    link: "https://todo-app-reactjs-461.netlify.app/",
    img: "",
  },
  {
    name: "Tic-Tac-Toe",
    description: "A simple tic-tac-toe game",
    source: "https://github.com/subhamdas461/simple-TicTacToe",
    link: "https://subhamdas461.github.io/simple-TicTacToe",
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
