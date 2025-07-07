import { MainDiv } from "../../global.styles";
import ExpList from "./ExpList";
import { FaBriefcase, FaCode, FaHandshake } from "react-icons/fa";
import { MdGroup } from "react-icons/md";

import JCLogo from "../../images/jeeCarnotLogo.png";
import GdgLogo from "../../images/gdgLogo.bmp";
import ISLogo from "../../images/isLogo.bmp";
import CrioLogo from "../../images/crioLogoDark.jpg";
import SamSungLogo from "../../images/samsung_logo.jpeg";

const ExpData = [
    {
        org: "Samsung Research Noida",
        tasks: [
            "Optimized and Automatic Speech Recognition (ASR) models for Bixby and Live Translate, reducing Word Error Rate by over 18%.",
            "Developed a full-stack AI dashboard using React and Node.js, accelerating model deployment speed by nearly 40%.",
            "Integrated ONNX models into Android applications, enabling real-time speech inference with less than 200ms latency on mid-range devices.",
            "Authored Inverse Text Normalization (ITN) rules, improving ASR transcription accuracy by standardizing numerical and contextual outputs significantly.",
            "Collaborated with Sarvam AI to benchmark and integrate Indic language models, achieving 25% improvement in early performance evaluations.",
            "Engineered a peer-to-peer large file transfer web application using WebRTC for secure, direct device-to-device sharing without cloud dependency.",
        ],
        year: "Jun 2022 - Ongoing",
        position: "Software Engineer",
        logo: SamSungLogo,
        icon: <FaBriefcase />,
        link: "https://research.samsung.com/sri-n",
    },
    {
        org: "Samsung Research Noida",
        tasks: [
            "Co-developed an Android data collection app used by 1,000+ employees, accelerating multimodal training data collection for machine learning.",
            "Resolved over 100 critical bugs across Samsung applications, improving stability and user experience for 1.5M+ global users.",
            "Contributed to scalable architecture design and cross-team collaboration, enhancing efficiency and deployment of machine learning-driven applications company-wide.",
        ],
        year: "Feb 2022 - May 2022",
        position: "R&D Intern",
        logo: SamSungLogo,
        icon: <FaBriefcase />,
        link: "https://research.samsung.com/sri-n",
    },
    {
        org: "JEE Carnot",
        tasks: [
            "Collaborated closely with UI/UX designers to implement 22+ responsive screens and over 50 reusable UI components.",
            "Developed 15+ custom reusable frontend components, reducing development time by 30% and accelerating feature delivery by two weeks.",
            "Integrated frontend with 10+ RESTful APIs for key features like authentication, payment processing, and user profile management.",
            "Enhanced application responsiveness and cross-browser compatibility, ensuring smooth performance across multiple devices and screen sizes.",
            "Contributed to faster release cycles and improved product quality through code optimization, modular design, and continuous feedback integration.",
        ],
        year: "Dec 2020 - Feb 2021",
        position: "Front-End Development Intern",
        logo: JCLogo,
        icon: <FaBriefcase />,
        link: "https://jeecarnot.com/",
    },
    {
        org: "Google Developer Student Club (GDSC)",
        tasks: [
            "Organized and contributed to tech events, workshops, and coding sessions, fostering a collaborative developer community on campus.",
            "Mentored junior students on web development and open-source contributions, encouraging hands-on learning and skill development.",
            "Collaborated with cross-functional teams to plan hackathons and developer meetups, increasing student engagement in technology and innovation.",
        ],
        year: "Sept 2021 - Aug 2022",
        position: "Core Member",
        logo: GdgLogo,
        icon: <MdGroup />,
        link: "https://gdg.community.dev/gdg-kolkata",
    },
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
