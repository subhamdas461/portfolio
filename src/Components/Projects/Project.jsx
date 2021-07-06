import React from "react";
import xmemeImgUrl from "../../images/Xmeme.png";
import signupImgUrl from "../../images/Signup.png";
import tttImgUrl from "../../images/tictactoe.png";
import weatherImgUrl from "../../images/weather.png";

import styled from "styled-components";
import { MainDiv } from "../../global.styles";

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
        img: xmemeImgUrl,
    },
    {
        name: "Signup-Login System",
        description: "Signup",
        source: "https://github.com/subhamdas461/auth-email-nodejs",
        link: "",
        img: signupImgUrl,
    },
    {
        name: "Github-Profile-Card",
        description: "See your github profile in card view",
        source: "https://github.com/subhamdas461/github-users",
        link: "https://github-users-api-461.netlify.app/",
        img: xmemeImgUrl,
    },
    {
        name: "Weather App",
        description: "Get current weather details",
        source: "https://github.com/subhamdas461/current-weather",
        link: "https://currentweather-here.web.app/",
        img: weatherImgUrl,
    },

    {
        name: "Tic-Tac-Toe",
        description: "A simple tic-tac-toe game",
        source: "https://github.com/subhamdas461/simple-TicTacToe",
        link: "https://subhamdas461.github.io/simple-TicTacToe",
        img: tttImgUrl,
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
