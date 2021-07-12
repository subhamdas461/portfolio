import { MainDiv } from "../../global.styles";
import ExpList from "./ExpList";
import { FaBriefcase, FaCode, FaHandshake } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

import JCLogo from "../../images/jeeCarnotLogo.png";
import GdgLogo from "../../images/gdgLogo.bmp";
import ISLogo from "../../images/isLogo.bmp";
import CrioLogo from "../../images/crioLogoDark.jpg";

const ExpData = [
    {
        org: "Crio.Do",
        tasks: [
            "Participated in Crio's Winter of Doing program-2021.",
            "Learned multiple topics on networking, REST, linux etc.",
        ],
        year: "Feb 2021 - Mar 2021",
        position: "Winter of Doing Participant",
        logo: CrioLogo,
        icon: <FaCode />,
        link: "https://www.crio.do/",
    },
    {
        org: "JEE Carnot",
        tasks: [
            "Developed the front-end of mentor and student using HTML, CSS and Javascript.",
            "Optimization and reusability of code.",
            "Integration with the backend services.",
        ],
        year: "Dec 2020 - Jan 2021",
        position: "Front-End Development Intern",
        logo: JCLogo,
        icon: <FaBriefcase />,
        link: "https://jeecarnot.com/",
    },
    {
        org: "Google Developer Group, Kolkata",
        tasks: [
            "Attended multiple events & meetings, conducted by experienced developers.",
        ],
        year: "Apr 2020 - present",
        position: "Member",
        logo: GdgLogo,
        icon: <MdGroup />,
        link: "https://gdg.community.dev/gdg-kolkata",
    },
    {
        org: "Internshala",
        tasks: ["Communication, marketing and leadership skills."],
        year: "Jun 2020 - Aug 2020",
        position: "Student Partner",
        logo: ISLogo,
        icon: <FaHandshake />,
        link: "https://internshala.com/",
        end: true,
    },
];
function Experience(props) {
    return (
        <div id="experience" className="exp section">
            <h1>Experience</h1>
            <MainDiv>
                {ExpData.map((e, id) => (
                    <ExpList data={e} key={id} id={id} mode={props.mode} />
                ))}
            </MainDiv>
        </div>
    );
}
export default Experience;
