import SkillItem from "./SkillItem";
import {BigPara} from "../../global.styles"


function Skills() {
  const skillList = [
    {
      name: "Javascript",
      progress: 70,
    },
    {
      name: "ReactJS",
      progress: 55,
    },
    {
      name: "HTML / CSS / Bootstrap",
      progress: 75,
    },
    {
      name: "NodeJS / ExpressJS ",
      progress: 50,
    },
    {
      name: "Heroku / Netlify / AWS",
      progress: 30,
    },
    {
      name: "Python / Java",
      progress: 30,
    },
    {
      name: "MongoDB / MySQL",
      progress: 40,
    },
    {
      name: "Git / ChromeDevTools",
      progress: 60,
    },
    {
      name: "DS & Algorithms",
      progress: 45,
    },
    {
      name: "C / C++",
      progress: 40,
    },
    {
      name: "Photoshop / Illustrator / Figma",
      progress: 40,
    },
    
  ];
  return (
    <div id="skills" className="skills section">
      <h1>Skills</h1>
      <BigPara top="100">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, molestias laboriosam placeat necessitatibus obcaecati odit sed inventore iste provident reiciendis quam quasi, nam laudantium accusantium? Assumenda tempore veritatis ut maxime.
      </BigPara>
      <div className="skill-container">

            {skillList.map((e,id) => <SkillItem name={e.name} key={id} progress={e.progress} />)}
      </div>
    </div>
  );
}
export default Skills;
