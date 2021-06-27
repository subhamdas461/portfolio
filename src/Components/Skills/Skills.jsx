import SkillItem from "./SkillItem";
import { BigPara } from "../../global.styles";

function Skills() {
  const skillList = [
    {
      name: "Javascript",
      progress: 70,
    },
    {
      name: "React",
      progress: 50,
    },
    {
      name: "HTML / CSS / Bootstrap",
      progress: 65,
    },
    {
      name: "Node.js / Express.js ",
      progress: 40,
    },
    {
      name: "Heroku / Netlify / AWS",
      progress: 30,
    },
    {
      name: "Python",
      progress: 30,
    },
    {
      name: "MongoDB / MySQL",
      progress: 40,
    },
    {
      name: "Git / ChromeDevTools / Docker",
      progress: 40,
    },
    {
      name: "DS & Algorithms",
      progress: 45,
    },
    {
      name: "Photoshop / Illustrator / Figma",
      progress: 30,
    },
  ];
  const paraText = `
      Some familar tools and tech that I use. Learning and using these to get my objectives done.
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
