import SkillItem from "./SkillItem";

function Skills() {
  const skillList = [
    {
      name: "Javascript",
      progress: 80,
    },
    {
      name: "C Programming",
      progress: 40,
    },
    {
      name: "React",
      progress: 50,
    },
    {
      name: "Javascript",
      progress: 80,
    },
    {
      name: "C Programming",
      progress: 40,
    },
    {
      name: "React",
      progress: 50,
    },
    {
      name: "Javascript",
      progress: 80,
    },
    {
      name: "C Programming",
      progress: 40,
    },
    {
      name: "React",
      progress: 50,
    },
  ];
  return (
    <div id="skills" className="skills section">
      <h1>Skills</h1>
      <div className="skill-container">

            {skillList.map((e,id) => <SkillItem name={e.name} key={id} progress={e.progress} />)}
      </div>
    </div>
  );
}
export default Skills;
