import SkillItem from "./SkillItem";
import { BigPara } from "../../global.styles";

function Skills() {
    const skillList = [
        {
            name: "Javascript / Typescript",
            progress: 80,
        },
        {
            name: "React",
            progress: 65,
        },
        {
            name: "HTML / CSS",
            progress: 80,
        },
        {
            name: "Node.js / Express.js",
            progress: 60,
        },
        {
            name: "AI/ML",
            progress: 65,
        },
        {
            name: "Git / Version Control",
            progress: 75,
        },
        {
            name: "C++ / Java / Python",
            progress: 60,
        },
        {
            name: "Data Structures & Algorithms",
            progress: 65,
        },
        {
            name: "System Design",
            progress: 55,
        },
        {
            name: "MongoDB / MySQL",
            progress: 60,
        },
        {
            name: "Android",
            progress: 50,
        },
        {
            name: "Heroku / Netlify / AWS",
            progress: 50,
        },
    ];
    const paraText = `
      I actively learn and work with a range of familiar tools and technologies to effectively achieve project goals and drive results.
  `;
    return (
        <div id="skills" className="skills section">
            <h1>Skills</h1>
            <BigPara top="120px" margin="auto" width="90%">
                {paraText}
            </BigPara>
            <div className="skill-container">
                {skillList.map((e, id) => (
                    <SkillItem name={e.name} key={id} progress={e.progress} />
                ))}
            </div>
        </div>
    );
}
export default Skills;
